import Service from '@/types/serviceTypes'
import testService from './testService'
import todoService from './todoService'

const restApiService: Service = {
  testService,
  todoService,
}

export default restApiService
