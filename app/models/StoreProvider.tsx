import { StoreHydration } from '@/types/hydrationTypes'
import { enableStaticRendering } from 'mobx-react-lite'
import { createContext } from 'react'
import Store from './store'

enableStaticRendering(typeof window === 'undefined')

let store: Store

function initializeStore(initialData?: StoreHydration) {
  const _store = store ?? new Store()

  if (initialData) {
    _store.hydrate(initialData)
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export const StoreContext = createContext<Store | undefined>(undefined)

export const StoreProvider = ({
  children,
  hydrationData,
}: {
  children: React.ReactNode
  hydrationData?: StoreHydration
}) => {
  const store = initializeStore(hydrationData)

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
