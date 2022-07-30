import OnboardingLayout from '@/components/Layout/OnboardingLayout'
import { ReactElement } from 'react'

const Step02 = () => {
  return <div>Step02</div>
}
export default Step02

Step02.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
