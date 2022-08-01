import OnboardingLayout from '@/components/layout/OnboardingLayout'
import { ReactElement } from 'react'

const Step05 = () => {
  return <div>Step05</div>
}
export default Step05

Step05.getLayout = function getLayout(page: ReactElement) {
  return (
    <OnboardingLayout
      currentStep={4}
      totalStep={5}
      title={['우주대탐험님의 관심사를', '3개 이상 골라주세요!']}
    >
      {page}
    </OnboardingLayout>
  )
}
