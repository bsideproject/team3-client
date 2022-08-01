import Image from 'next/image'
import { ReactNode } from 'react'
import styled from 'styled-components'
import Container from '../Container/Container'
import { PrevButton } from '../ui/buttons'

type Props = {
  totalStep: number
  currentStep: number
  title: string[]
  children: ReactNode
}

const OnboardingLayout = ({ children, totalStep, currentStep, title }: Props) => {
  return (
    <Container>
      <StyledHeader>
        <StyledPrevButton />
        <ProgressContainer>
          <TotalProgress />
          <CurrentProgress currentStep={currentStep} totalStep={totalStep}>
            <RocketImageWrapper>
              <Image src="/images/rocket.png" width={36} height={38} alt="로켓" />
            </RocketImageWrapper>
          </CurrentProgress>
        </ProgressContainer>
        <Title>
          {title[0]}
          <br />
          {title[1]}
        </Title>
      </StyledHeader>
      <main>{children}</main>
    </Container>
  )
}
export default OnboardingLayout

const StyledHeader = styled.header`
  ${({ theme }) => theme.grid.mobile}
  grid-template-rows: 24px 63px 105px 49px;
  padding-top: 32px;
`

const StyledPrevButton = styled(PrevButton)`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  margin-left: -5px;
`

const ProgressContainer = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;
  position: relative;
  width: 100%;
  height: 27px;
  place-self: end center;
`

const TotalProgress = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.color.G70D};
  border-radius: 54px;
`

const CurrentProgress = styled.div<{ currentStep: number; totalStep: number }>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: ${({ currentStep, totalStep }) => (currentStep / totalStep) * 100}%;
  height: 4px;
  background: ${({ theme }) => theme.gradient.G100};
  border-radius: 54px;
`

const RocketImageWrapper = styled.div`
  position: absolute;
  right: -9px;
  top: -15px;
`

const Title = styled.h1`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  place-self: end center;
  ${({ theme }) => theme.typo.H200B}
  color: ${({ theme }) => theme.color.G20D};
  text-align: center;
`
