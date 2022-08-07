import { isServerSide } from '@/utils/basicUtils'
import axios from 'axios'

export const restApiClient = axios.create({
  baseURL: isServerSide() ? process.env.API_URL : '/api',
  timeout: 2000,
})

if (!isServerSide()) {
  restApiClient.interceptors.response.use(
    (response) => {
      return response.data
    },
    async (error) => {
      const originalRequest = error.config

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        await axios.post('/api/auth/refreshAccessToken')
        return restApiClient(originalRequest)
      }

      return Promise.reject(error)
    }
  )
}
