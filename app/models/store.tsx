import service from '@/services/service'
import { createContext } from 'react'
import TodosModel from './domain/TodosModel'

const models = {
  todosModel: new TodosModel(service),
}

export const StoreContext = createContext<typeof models>(models)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <StoreContext.Provider value={models}>{children}</StoreContext.Provider>
}

export default StoreProvider
