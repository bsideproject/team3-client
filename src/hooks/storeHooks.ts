import { StoreContext } from '@/stores/StoreProvider'
import { useContext } from 'react'

export function useStore() {
  const context = useContext(StoreContext)

  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}

export function useThemeStore() {
  const { themeStore } = useStore()
  return themeStore
}
