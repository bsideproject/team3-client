import { isServerSide } from '@/utils/basicUtils'
import { enableStaticRendering } from 'mobx-react-lite'
import { createContext, ReactNode, useState } from 'react'
import RootStore from './RootStore'

enableStaticRendering(isServerSide())

export const StoreContext = createContext<RootStore | undefined>(undefined)

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [rootStore] = useState(() => new RootStore())

  // 개인적으로는 이 방법이 더 좋다고 생각합니다..! 굳이 useState를 쓸 이유가 없어 보입니다!!
  // const rootStore = new RootStore()
  return <StoreContext.Provider value={rootStore}>{children} </StoreContext.Provider>
}

export default StoreProvider
