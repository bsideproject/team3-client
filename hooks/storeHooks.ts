import { StoreContext } from '@/models/StoreProvider'
import { useContext } from 'react'

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
