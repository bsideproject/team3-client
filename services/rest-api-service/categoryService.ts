import { restApiClient } from './client'

export type Category = string

const categoryService = {
  async getCategories() {
    return await restApiClient.get<any, Category[]>('/getCategories')
  },
}

export default categoryService
