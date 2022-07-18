import { TestServiceInterface } from '@/types/serviceTypes'
import { AxiosInstance } from 'axios'
import { getRestApiClient } from './client'

export default class TestService implements TestServiceInterface {
  private client: AxiosInstance

  constructor(authToken?: string) {
    this.client = getRestApiClient(authToken)
  }

  test() {
    return 'apitest'
  }
}
