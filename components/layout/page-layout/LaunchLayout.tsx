import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import { viewportHeight } from '@/styles/mixins'

const LaunchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppContainer>
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
}
export default LaunchLayout

const StyledMain = styled.main`
  ${viewportHeight}
`
