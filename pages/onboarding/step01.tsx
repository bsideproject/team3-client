import EmptyLayout from '@/components/layout/EmptyLayout'
import OnboardingLayout from '@/components/layout/OnboardingLayout'
import { ReactElement } from 'react'

const Step01 = () => {
  return <div>Step01</div>
}
export default Step01

Step01.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>
}
