import OnboardingLayout from '@/components/Layout/OnboardingLayout'
import Checkbox from '@/components/ui/Checkbox'
import { ReactElement } from 'react'

const Step02 = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Checkbox id="test" />
      <label htmlFor="test">test</label>
    </div>
  )
}
export default Step02

Step02.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
