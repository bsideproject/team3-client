import service from '@/services/service'
import { StoreHydration } from '@/types/hydrationTypes'
import TodosModel from './domain/TodosModel'

export default class Store {
  todosModel: TodosModel

  constructor() {
    this.todosModel = new TodosModel(this, service.todoService)
  }

  hydrate(data: StoreHydration) {
    if (data.todosModel) {
      this.todosModel.hydrate(data.todosModel)
    }
  }
}
