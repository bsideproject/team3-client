import { Todo } from './todoTypes'

export type WithHydration = {
  hydrationData: StoreHydration
}

export type StoreHydration = {
  todosModel?: TodosModelHydration
}

export type TodosModelHydration = {
  todos: Todo[]
}
