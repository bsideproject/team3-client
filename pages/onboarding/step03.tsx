import OnboardingLayout from '@/components/layout/OnboardingLayout'
import { ReactElement } from 'react'

const Step03 = () => {
  return <div>Step03</div>
}
export default Step03

Step03.getLayout = function getLayout(page: ReactElement) {
  return (
    <OnboardingLayout
      currentStep={2}
      totalStep={5}
      title={['우주대탐험님,', '프로필사진을 변경해주세요!']}
    >
      {page}
    </OnboardingLayout>
  )
}
