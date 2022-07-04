import service from '@/services/service'
import TodoModel from './domain/TodoModel'

export default class Store {
  static type = {
    TODO_MODEL: 'todo',
  }

  private todoModel: TodoModel

  constructor() {
    this.todoModel = new TodoModel(service)
  }
}
