import Image from 'next/image'
import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import { onboardingConfirmButtonHeight, PrevButton } from '@/components/ui/buttons'
import { viewportHeight } from '@/styles/mixins'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import { useRouter } from 'next/router'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'

type Props = {
  children: ReactNode
}

const OnboardingProgressLayout = observer(({ children }: Props) => {
  const { onboardingStore } = useStore()

  const handleGoBack = () => {
    const currentProgress = onboardingStore.currentProgress
    onboardingStore.setCurrentProgress(currentProgress - 1)
  }

  return (
    <AppContainer>
      <StyledGrid as="header">
        <StyledPrevButton onClick={handleGoBack} />
        <ProgressContainer>
          <TotalProgress />
          <CurrentProgress
            currentProgress={onboardingStore.currentProgress}
            totalProgress={onboardingStore.totalProgress}
          >
            <RocketImageWrapper>
              <Image src="/images/rocket.png" width={36} height={38} alt="로켓" />
            </RocketImageWrapper>
          </CurrentProgress>
        </ProgressContainer>
        <Title>
          {onboardingStore.progressTitle[0]}
          <br />
          {onboardingStore.progressTitle[1]}
        </Title>
      </StyledGrid>
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
})
export default OnboardingProgressLayout

const headerGridTemplateRows = [24, 63, 105, 49]
const headerPaddingTop = 32

const StyledGrid = styled(GridContainer)`
  grid-template-rows: ${headerGridTemplateRows[0]}px ${headerGridTemplateRows[1]}px ${headerGridTemplateRows[2]}px ${headerGridTemplateRows[3]}px;
  padding-top: ${headerPaddingTop}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: ${({ theme }) => theme.color.background};
`

const StyledPrevButton = styled(PrevButton)`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  margin-left: -5px;
`

const ProgressContainer = styled.div`
  grid-column: 1 / -1;
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

const CurrentProgress = styled.div<{
  currentProgress: number
  totalProgress: number
}>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: ${({ currentProgress, totalProgress }) =>
    (currentProgress / totalProgress) * 100}%;
  height: 4px;
  background: ${({ theme }) => theme.gradient.G100};
  border-radius: 54px;
  transition: all 0.3s linear;
`

const RocketImageWrapper = styled.div`
  position: absolute;
  right: -9px;
  top: -15px;
  transition: all 0.3s linear;
`

const Title = styled.h1`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  place-self: end center;
  ${({ theme }) => theme.typo.H200B}
  color: ${({ theme }) => theme.color.G20D};
  text-align: center;
`

const StyledMain = styled.main`
  /* ${viewportHeight} */
  padding-top: ${headerGridTemplateRows.reduce((acc, val) => acc + val, 0) +
  headerPaddingTop}px;
  padding-bottom: ${onboardingConfirmButtonHeight}px;
`
