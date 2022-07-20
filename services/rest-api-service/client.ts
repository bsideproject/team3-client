import axios from 'axios'

export const restApiClient = axios.create({
  baseURL: typeof window === 'undefined' ? process.env.API_URL : '/api',
  timeout: 1000,
})

if (typeof window !== undefined) {
  restApiClient.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        await axios.post('/api/auth/refreshAccessToken')
        return restApiClient(originalRequest)
      }

      return Promise.reject(error)
    }
  )
}
