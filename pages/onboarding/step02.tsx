import OnboardingLayout from '@/components/Layout/OnboardingLayout'
import Checkbox from '@/components/ui/checkboxes/Checkbox'
import LabeledCheckbox from '@/components/ui/checkboxes/LabeledCheckbox'
import { ReactElement } from 'react'

const Step02 = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Checkbox id="test" checked={true} />
      <label htmlFor="test">test</label>

      <div>
        <LabeledCheckbox checked={true} text={'가족'}></LabeledCheckbox>
      </div>
    </div>
  )
}
export default Step02

Step02.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
