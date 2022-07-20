import httpProxy from 'http-proxy'
import Cookies from 'cookies'
import url from 'url'

// See: https://maxschmitt.me/posts/next-js-http-only-cookie-auth-tokens/

const API_URL = process.env.API_URL

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    let requestUrl = req.url ?? 'UNDEFINED_URL'

    const pathname = url.parse(requestUrl).pathname
    const isLogin = pathname === '/api/auth/login'
    const isRefreshToken = pathname === '/api/auth/refreshToken'

    const cookies = new Cookies(req, res)
    const authToken = cookies.get('auth-token')

    requestUrl = requestUrl.replace(/^\/api/, '')

    req.headers.cookie = ''

    if (authToken) {
      req.headers['auth-token'] = authToken
    }

    if (isLogin) {
      proxy.once('proxyRes', interceptLoginResponse)
    }

    if (isRefreshToken) {
      proxy.once('proxyRes', interceptRefreshToken)
    }

    proxy.once('error', reject)

    proxy.web(req, res, {
      target: API_URL,
      autoRewrite: false,
      selfHandleResponse: isLogin || isRefreshToken,
    })

    function interceptLoginResponse(proxyRes, req, res) {
      let apiResponseBody = ''
      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk
      })

      proxyRes.on('end', () => {
        try {
          const { authToken, refreshToken } = JSON.parse(apiResponseBody)

          const cookies = new Cookies(req, res)
          cookies.set('auth-token', authToken, {
            httpOnly: true,
            sameSite: 'lax',
          })
          cookies.set('refresh-token', refreshToken, {
            httpOnly: true,
            sameSite: 'lax',
          })

          // Redirect로 바꿔야할듯
          res.status(200).json({ loggedIn: true })
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
          const { authToken } = JSON.parse(apiResponseBody)

          if (authToken) {
            const cookies = new Cookies(req, res)
            cookies.set('auth-token', authToken, {
              httpOnly: true,
              sameSite: 'lax',
            })

            res.redirect('/')
          } else {
            res.redirect('/login')
          }

          resolve()
        } catch (err) {
          reject(err)
        }
      })
    }
  })
}
