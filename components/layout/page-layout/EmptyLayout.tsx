import { ReactNode } from 'react'
import AppContainer from '@/components/layout/container-layout/AppContainer'

const EmptyLayout = ({ children }: { children: ReactNode }) => {
  return <AppContainer>{children}</AppContainer>
}
export default EmptyLayout
