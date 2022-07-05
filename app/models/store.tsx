import service from '@/services/service'
import { createContext } from 'react'
import TodoModel from './domain/TodoModel'

const models = {
  todoModel: new TodoModel(service),
}

export const StoreContext = createContext<typeof models | null>(null)

export const StorePrivider = ({ children }: { children: React.ReactNode }) => {
  return <StoreContext.Provider value={models}>{children}</StoreContext.Provider>
}
