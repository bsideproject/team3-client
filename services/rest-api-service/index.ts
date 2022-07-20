import Service from '@/types/serviceTypes'
import TestService from './TestService'
import TodoService from './TodoService'

const restApiService: Service = {
  testService: new TestService(),
  todoService: new TodoService(),
}

export default restApiService
