import TodosModel from '@/models/domain/TodosModel'

export default class TodoListViewModel {
  private todosModel: TodosModel

  constructor(todosModel: TodosModel) {
    this.todosModel = todosModel
  }

  get todoList() {
    return this.todosModel.todoList
  }

  addTodo(title: string) {
    const id =
      this.todosModel.todoList
        .map((todo) => todo.id)
        .reduce((maxId, currId) => {
          if (currId > maxId) {
            return currId
          }

          return maxId
        }, 0) + 1

    const todo = {
      id,
      title,
    }

    this.todosModel.create(todo)
  }
}
