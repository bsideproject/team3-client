import { isServerSide } from '@/utils/basicUtils'
import { enableStaticRendering } from 'mobx-react-lite'
import { createContext, ReactNode, useState } from 'react'
import RootStore from './RootStore'

enableStaticRendering(isServerSide())

export const StoreContext = createContext<RootStore | undefined>(undefined)

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [rootStore] = useState(() => new RootStore())

  return <StoreContext.Provider value={rootStore}>{children} </StoreContext.Provider>
}

export default StoreProvider
