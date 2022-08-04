import { ReactNode } from 'react'
import styled from 'styled-components'
import Container from '@/components/layout/container-layout/Container'
import { viewportHeight } from '@/styles/mixins'
import { onboardingConfirmButtonHeight } from '@/components/ui/buttons'

const OnboardingTermsAgreementLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <StyledMain>{children}</StyledMain>
    </Container>
  )
}
export default OnboardingTermsAgreementLayout

const StyledMain = styled.main`
  /* ${viewportHeight} */
  padding-bottom: ${onboardingConfirmButtonHeight}px;
`
