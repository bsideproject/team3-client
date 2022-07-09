import service from '@/services/service'
import { StoreHydration } from '@/types/hydrationTypes'
import { enableStaticRendering } from 'mobx-react-lite'
import { createContext } from 'react'
import TodosModel from './domain/TodosModel'

enableStaticRendering(typeof window === 'undefined')

let store: Store

export class Store {
  todosModel: TodosModel

  constructor() {
    this.todosModel = new TodosModel(this, service)
  }

  hydrate(data: StoreHydration) {
    if (data.todosModel) {
      this.todosModel.hydrate(data.todosModel)
    }
  }
}

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
