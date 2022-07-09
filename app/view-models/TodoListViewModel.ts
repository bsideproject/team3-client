import TodosModel from '@/models/domain/TodosModel'

export default class TodoListViewModel {
  private todosModel: TodosModel

  constructor(todosModel: TodosModel) {
    this.todosModel = todosModel
  }

  public get todoList() {
    return this.todosModel.todoList
  }
}
