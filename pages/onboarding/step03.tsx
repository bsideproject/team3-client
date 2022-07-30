import OnboardingLayout from '@/components/Layout/OnboardingLayout'
import { ReactElement } from 'react'

const Step03 = () => {
  return <div>Step03</div>
}
export default Step03

Step03.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
