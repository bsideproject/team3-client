import { todosFixture } from '@/models/domain/__fixtures__/todosFixture'
import { TodoServiceInterface } from '@/types/serviceTypes'
import { Todo } from '@/types/todoTypes'
import { AxiosInstance } from 'axios'
import { getRestApiClient } from './client'

export default class TodoService implements TodoServiceInterface {
  private client: AxiosInstance

  constructor(authToken?: string) {
    this.client = getRestApiClient(authToken)
  }

  getTodoList() {
    const todos: Todo[] = todosFixture

    return Promise.resolve(todos)
  }

  addTodo(item: Todo) {
    return Promise.resolve(item)
  }

  deleteTodo(item: Todo) {
    return Promise.resolve(item)
  }

  updateTodo(item: Todo) {
    return Promise.resolve(item)
  }

  deleteAllTodo() {
    return Promise.resolve()
  }
}
