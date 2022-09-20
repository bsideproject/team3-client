import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'
import Button from '@/components/ui/buttons/Button'

type Props = {
  children: ReactNode
}

const MypageReviewLayout = ({ children }: Props) => {
  return (
    <AppContainer>
      <PageHeader headerTitle={'리뷰 관리'} hasPrev />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
}
export default MypageReviewLayout

const StyledMain = styled.main`
  padding-top: ${pageHeaderHeight}px;
`
