import EmptyLayout from '@/components/Layout/EmptyLayout'
import OnboardingLayout from '@/components/Layout/OnboardingLayout'
import { ReactElement } from 'react'

const Step01 = () => {
  return <div>Step01</div>
}
export default Step01

Step01.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>
}
