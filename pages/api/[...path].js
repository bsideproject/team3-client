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
            google_access_token,
            google_name,
            google_email,
            google_picture,
            is_signed_in,
          } = JSON.parse(apiResponseBody)

          if (!is_signed_in) {
            res.redirect(
              `/authCallback/redirectToOnboarding?name=${encodeURI(
                google_name
              )}&email=${encodeURI(google_email)}&profileImageUrl=${encodeURI(
                google_picture
              )}&providerToken=${encodeURI(google_access_token)}`
            )
          } else {
            res.redirect(
              `/authCallback/login?providerToken=${encodeURI(google_access_token)}`
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
          const { access_token, refresh_token } = JSON.parse(apiResponseBody)

          if (!access_token || !refresh_token) {
            const cookies = new Cookies(req, res)
            cookies.set('access-token', access_token, {
              httpOnly: true,
              sameSite: 'lax',
              expires: new Date('Fri, 31 Dec 9999 23:59:59 GMT'),
            })
            cookies.set('refresh-token', refresh_token, {
              httpOnly: true,
              sameSite: 'lax',
              expires: new Date('Fri, 31 Dec 9999 23:59:59 GMT'),
            })
          } else {
            res.status(404).send({
              title: 'LOGIN_FAILED',
              detail: '엑세스토큰, 리프레쉬토큰을 받아오지 못했습니다.',
            })
          }

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
          const { access_token } = JSON.parse(apiResponseBody)

          if (access_token) {
            const cookies = new Cookies(req, res)
            cookies.set('access-token', access_token, {
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
            const { picture_url, nickname } = JSON.parse(apiResponseBody)

            res
              .status(200)
              .json({
                nickname: nickname,
                pictureUrl: picture_url,
                isLoggedIn: true,
              })
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
