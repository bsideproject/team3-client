import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'

type Props = {
  hasPrev?: boolean
  children: ReactNode
}

const EditProfileLayout = ({ children }: Props) => {
  return (
    <AppContainer>
      <PageHeader title={'프로필 설정'} hasPrev />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
}
export default EditProfileLayout

const StyledMain = styled.main`
  padding-top: ${pageHeaderHeight}px;
`
