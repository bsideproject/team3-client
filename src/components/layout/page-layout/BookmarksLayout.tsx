import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'
import Button from '@/components/ui/buttons/Button'

type Props = {
  children: ReactNode
}

const BookmarksLayout = ({ children }: Props) => {
  return (
    <AppContainer>
      <PageHeader title={'찜한 채널'} hasPrev />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
}
export default BookmarksLayout

const StyledMain = styled.main`
  padding-top: ${pageHeaderHeight}px;
`
