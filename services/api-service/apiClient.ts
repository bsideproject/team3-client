import axios from 'axios'

let apiClient

function getApiClient() {
  axios.create({
    baseURL: 'test',
  })
}
