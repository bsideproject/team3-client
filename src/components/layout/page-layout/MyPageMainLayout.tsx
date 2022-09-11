import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import { confirmButtonHeight } from '@/components/ui/buttons/ConfirmButton'
import { observer } from 'mobx-react-lite'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'
import { viewportHeight } from '@/styles/mixins'

type Props = {
  hasPrev?: boolean
  children: ReactNode
}

const MyPageMainLayout = ({ children }: Props) => {
  return (
    <AppContainer>
      <PageHeader title={'마이페이지'} hasPrev />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
}
export default MyPageMainLayout

const StyledMain = styled.main`
  padding-top: ${pageHeaderHeight}px;
`
