import { isServerSide } from '@/utils/basicUtils'
import axios from 'axios'

const commonClient = axios.create({
  baseURL: isServerSide() ? process.env.API_URL : '/api',
  timeout: 2000,
})

if (!isServerSide()) {
  commonClient.interceptors.response.use(
    (response) => {
      return response.data
    },
    async (error) => {
      const originalRequest = error.config

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        await axios.post('/api/auth/refreshAccessToken')
        return commonClient(originalRequest)
      }

      return Promise.reject(error)
    }
  )
} else {
  commonClient.interceptors.response.use((response) => {
    return response.data
  })
}

export default commonClient
