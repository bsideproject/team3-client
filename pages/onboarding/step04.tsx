import OnboardingLayout from '@/components/layout/page-layout/OnboardingLayout'
import { ReactElement } from 'react'

const Step04 = () => {
  return <div>Step04</div>
}
export default Step04

Step04.getLayout = function getLayout(page: ReactElement) {
  return (
    <OnboardingLayout
      currentStep={3}
      totalStep={5}
      title={['우주대탐험님이 궁금해요!', '조금 더 알려주세요.']}
    >
      {page}
    </OnboardingLayout>
  )
}
