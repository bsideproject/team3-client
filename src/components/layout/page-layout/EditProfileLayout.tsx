import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'
import Button from '@/components/ui/buttons/Button'

type Props = {
  hasPrev?: boolean
  children: ReactNode
}

const EditProfileLayout = ({ children }: Props) => {
  return (
    <AppContainer>
      <SubmitButton form="edit-profile" type="submit">
        저장
      </SubmitButton>
      <PageHeader title={'프로필 설정'} hasPrev />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
}
export default EditProfileLayout

const StyledMain = styled.main`
  padding-top: ${pageHeaderHeight}px;
`

const SubmitButton = styled(Button)`
  position: absolute;
  top: 29px;
  right: 18px;
  z-index: 1010;
  ${({ theme }) => theme.typo.H50M}
  color: ${({ theme }) => theme.color.PB600};
`
