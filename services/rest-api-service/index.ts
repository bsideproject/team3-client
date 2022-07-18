import testService from './testService'
import todoService from './todoService'
import Service from '@/types/serviceTypes'
import TestService from './testService'
import TodoService from './todoService'

const restApiService: Service = {
  testService: new TestService(),
  todoService: new TodoService(),
}

export default restApiService
