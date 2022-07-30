import OnboardingLayout from '@/components/Layout/OnboardingLayout'
import { ReactElement } from 'react'

const Step04 = () => {
  return <div>Step04</div>
}
export default Step04

Step04.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
