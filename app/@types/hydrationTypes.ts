import { Todo } from './todoTypes'

export type StoreHydration = {
  todosModel?: TodosModelHydration
}

export type TodosModelHydration = {
  todos: Todo[]
}
