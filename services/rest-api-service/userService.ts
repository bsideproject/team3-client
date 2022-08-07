import axios from 'axios'
import { restApiClient } from './client'

const userService = {
  async getJwtToken(providerToken: string) {
    return await axios.post(
      '/api/token/getToken',
      {},
      { headers: { Authorization: providerToken } }
    )
  },

  async getUserInfo() {
    return await restApiClient.get('/getUserInfo')
  },
}

export default userService
