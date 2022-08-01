import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  position: relative;
  max-width: 375px;
  margin: 0 auto;
`

export default Container
