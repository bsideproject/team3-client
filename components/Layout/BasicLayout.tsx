import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
}

const BasicLayout = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
`

export default BasicLayout
