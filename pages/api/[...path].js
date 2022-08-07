import httpProxy from 'http-proxy'
import Cookies from 'cookies'
import url from 'url'
import queryString from 'query-string'
import axios from 'axios'

// See: https://maxschmitt.me/posts/next-js-http-only-cookie-access-tokens/
const API_URL = process.env.API_URL

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    const pathname = url.parse(req.url).pathname
    const isAuthentication = pathname === '/api/auth/socialToken/google'
    const isRefreshAccessToken = pathname === '/api/auth/refreshAccessToken'

    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access-token')
    const refreshToken = cookies.get('refresh-token')

    req.url = req.url.replace(/^\/api/, '')
    req.headers.cookie = ''

    if (accessToken) {
      req.headers['access-token'] = accessToken
    }

    if (isAuthentication) {
      proxy.once('proxyRes', interceptLoginResponse)
    }

    if (isRefreshAccessToken) {
      req.body = { refreshToken } // 이걸 백엔드에서 잘 받을지 모르겠음.
      proxy.once('proxyRes', interceptRefreshToken)
    }

    proxy.once('error', reject)

    proxy.web(req, res, {
      target: API_URL,
      autoRewrite: false,
      selfHandleResponse: isAuthentication || isRefreshAccessToken,
    })

    function interceptLoginResponse(proxyRes, req, res) {
      let apiResponseBody = ''
      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk
      })

      proxyRes.on('end', () => {
        try {
          const {
            googleAccessToken,
            googleName,
            googleEmail,
            googlePicture,
            isSignedIn,
          } = JSON.parse(apiResponseBody)

          const cookies = new Cookies(req, res)
          console.log(isSignedIn)
          if (!isSignedIn) {
            res.redirect(
              `/redirectToOnboarding?name=${googleName}&email=${googleEmail}&profileImageUrl=${googlePicture}&providerToken=${googleAccessToken}`
            )
            resolve()
          }

          axios
            .post(
              `${API_URL}/token/getToken`,
              {},
              { headers: { Authorization: googleAccessToken } }
            )
            .then((tokenRes) => {
              const { accessToken, refreshToken } = tokenRes.data

              cookies.set('access-token', accessToken, {
                httpOnly: true,
                sameSite: 'lax',
              })
              cookies.set('refresh-token', refreshToken, {
                httpOnly: true,
                sameSite: 'lax',
              })

              res.redirect('/')
              resolve()
            })
            .catch((err) => reject(err))
        } catch (err) {
          reject(err)
        }
      })
    }

    function interceptRefreshToken(proxyRes, req, res) {
      let apiResponseBody = ''
      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk
      })

      proxyRes.on('end', () => {
        try {
          const responseBody = JSON.parse(apiResponseBody)
          const accessToken = responseBody.accessToken

          if (accessToken) {
            const cookies = new Cookies(req, res)
            cookies.set('access-token', accessToken, {
              httpOnly: true,
              sameSite: 'lax',
            })

            res.status(200).json({ tokenRefreshed: true })
          } else {
            res.status(401).json({ tokenRefreshed: false })
          }

          resolve()
        } catch (err) {
          reject(err)
        }
      })
    }
  })
}
