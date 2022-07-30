import OnboardingLayout from '@/components/Layout/OnBoardingLayout'
import { ReactElement } from 'react'

const Step05 = () => {
  return <div>Step05</div>
}
export default Step05

Step05.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
