import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import { confirmButtonHeight } from '@/components/ui/buttons/ConfirmButton'
import { observer } from 'mobx-react-lite'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'
import { viewportHeight } from '@/styles/mixins'

type Props = {
  children: ReactNode
}

const ChannelAddLayout = observer(({ children }: Props) => {
  return (
    <AppContainer>
      <PageHeader title={'채널등록'} hasPrev />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
})
export default ChannelAddLayout

const StyledMain = styled.main`
  ${viewportHeight}
  padding-top: ${pageHeaderHeight}px;
  padding-bottom: ${confirmButtonHeight}px;
`
