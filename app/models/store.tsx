import service from '@/services/service'
import { createContext } from 'react'
import TodoModel from './domain/TodosModel'

class Store {
  static modelType = {
    todo_MODEL,
  }

  private
}
const ModelType = {}

const models = {
  todoModel: new TodoModel(service),
}

export const StoreContext = createContext<typeof models | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <StoreContext.Provider value={models}>{children}</StoreContext.Provider>
}

export default StoreProvider
