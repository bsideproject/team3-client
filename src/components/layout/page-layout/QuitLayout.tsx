import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'
import Button from '@/components/ui/buttons/Button'
import { viewportHeight } from '@/styles/mixins'

type Props = {
  children: ReactNode
}

const QuitLayout = ({ children }: Props) => {
  return (
    <AppContainer>
      <PageHeader title={'회원탈퇴'} hasPrev />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
}
export default QuitLayout

const StyledMain = styled.main`
  ${viewportHeight}
  padding-top: ${pageHeaderHeight}px;
`
