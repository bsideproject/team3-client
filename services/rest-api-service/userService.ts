import axios from 'axios'
import { restApiClient } from './client'

interface UserResponse {
  nickname: string
  pictureUrl: string
  isLoggedIn: string
}

const userService = {
  async getJwtToken(providerToken: string) {
    return await axios.post(
      '/api/token/getToken',
      {},
      { headers: { Authorization: providerToken } }
    )
  },

  async getUserInfo() {
    const user: UserResponse = await restApiClient.get('/getUserInfo')
    return user
  },
}

export default userService
