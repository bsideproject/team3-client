import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import { confirmButtonHeight } from '@/components/ui/buttons/ConfirmButton'
import { observer } from 'mobx-react-lite'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'

type Props = {
  children: ReactNode
}

const ReviewAddLayout = observer(({ children }: Props) => {
  return (
    <AppContainer>
      <PageHeader title={'리뷰작성'} hasPrev />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
})
export default ReviewAddLayout

const StyledMain = styled.main`
  padding-top: ${pageHeaderHeight}px;
  padding-bottom: ${confirmButtonHeight}px;
`
