import TodoModel from '@/models/domain/TodoModel'
import { Todo } from '@/types/Todo'

export default class TodoViewModel {
  private todoModel: TodoModel

  constructor(todoModel: TodoModel) {
    this.todoModel = todoModel
  }

  public get todoList() {
    return this.todoModel.todoList
  }
}
