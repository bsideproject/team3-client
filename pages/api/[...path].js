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
    const isAuthenticationCheck = pathname === '/api/auth/socialToken/google'
    const isAuthentication = pathname === '/api/token/getToken'
    const isRefreshAccessToken = pathname === '/api/auth/refreshAccessToken'
    const isGetUser = pathname === '/api/getUserInfo'
    const isOnboarding = pathname === '/api/onboarding'

    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access-token')
    const refreshToken = cookies.get('refresh-token')

    req.url = req.url.replace(/^\/api/, '')
    req.headers.cookie = ''

    // Authentication, Onboarding 때만큼은 providerTOken이 Authorization 헤더에 들어감.
    if (accessToken && !isAuthentication && !isOnboarding) {
      req.headers['Authorization'] = accessToken
    }

    if (isAuthenticationCheck) {
      proxy.once('proxyRes', interceptAuthenticationCheck)
    }

    if (isAuthentication) {
      proxy.once('proxyRes', interceptAuthentication)
    }

    if (isRefreshAccessToken) {
      req.body = { refreshToken } // 이걸 백엔드에서 잘 받을지 모르겠음.
      proxy.once('proxyRes', interceptRefreshToken)
    }

    if (isGetUser) {
      proxy.once('proxyRes', interceptGetUser)
    }

    proxy.once('error', reject)

    proxy.web(req, res, {
      target: API_URL,
      autoRewrite: false,
      selfHandleResponse:
        isAuthenticationCheck ||
        isAuthentication ||
        isRefreshAccessToken ||
        isGetUser,
    })

    function interceptAuthenticationCheck(proxyRes, req, res) {
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

          if (!isSignedIn) {
            res.redirect(
              `/authCallback/redirectToOnboarding?name=${encodeURI(
                googleName
              )}&email=${encodeURI(googleEmail)}&profileImageUrl=${encodeURI(
                googlePicture
              )}&providerToken=${encodeURI(googleAccessToken)}`
            )
          } else {
            res.redirect(
              `/authCallback/login?providerToken=${encodeURI(googleAccessToken)}`
            )
          }

          resolve()
        } catch (err) {
          reject(err)
        }
      })
    }

    function interceptAuthentication(proxyRes, req, res) {
      let apiResponseBody = ''
      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk
      })

      proxyRes.on('end', () => {
        try {
          const { accessToken, refreshToken } = JSON.parse(apiResponseBody)

          const cookies = new Cookies(req, res)
          cookies.set('access-token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date('Fri, 31 Dec 9999 23:59:59 GMT'),
          })
          cookies.set('refresh-token', refreshToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date('Fri, 31 Dec 9999 23:59:59 GMT'),
          })

          res.send()
          resolve()
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

    function interceptGetUser(proxyRes, req, res) {
      let apiResponseBody = ''
      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk
      })

      proxyRes.on('end', () => {
        // 백엔드에서 error 코드, 메세지 명확하게 부탁.. statusCode 만으로는 한계가 있음. internal 서버 리턴 하지말것..
        try {
          if (proxyRes.statusCode === 200) {
            const { pictureUrl, nickname } = JSON.parse(apiResponseBody)
            const user = { pictureUrl, nickname }

            res.status(200).json({ ...user, isLoggedIn: true })
          } else {
            res.status(200).json({ nickname: '', pictureUrl: '', isLoggedIn: false })
          }
          resolve()
        } catch (err) {
          reject(err)
        }
      })
    }
  })
}
