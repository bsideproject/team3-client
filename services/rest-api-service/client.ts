import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

let restApiClient: AxiosInstance

export function getRestApiClient(authToken?: string) {
  const config: AxiosRequestConfig = {
    baseURL: 'test',
    timeout: 1000,
    headers: {},
  }

  if (authToken) {
    config.headers!['auth-token'] = authToken
  }

  const _client = restApiClient ?? axios.create(config)

  // For SSG and SSR always create a new client with authToken
  if (typeof window === 'undefined') return _client
  // Create the client once in the browser client
  if (!restApiClient) restApiClient = _client

  return _client
}
