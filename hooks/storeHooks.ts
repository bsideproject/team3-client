import { useContext } from 'react'
import { StoreContext } from '@/models/store'

export function useStore() {
  const context = useContext(StoreContext)

  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}

export function useTodosModel() {
  const { todosModel } = useStore()
  return todosModel
}
