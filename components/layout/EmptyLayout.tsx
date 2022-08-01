import { ReactNode } from 'react'
import styled from 'styled-components'
import Container from '../container/Container'

const EmptyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <StyledMain>{children}</StyledMain>
    </Container>
  )
}
export default EmptyLayout

const StyledMain = styled.main`
  height: 100vh;
`
