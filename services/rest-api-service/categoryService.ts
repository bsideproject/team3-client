import { restApiClient } from './client'

const categoryService = {
  async getCategories() {
    return await restApiClient.get('/getCategories')
  },
}

export default categoryService
