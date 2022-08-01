import OnboardingLayout from '@/components/layout/OnboardingLayout'
import Checkbox from '@/components/ui/checkboxes/Checkbox'
import LabeledCheckbox from '@/components/ui/checkboxes/LabeledCheckbox'
import FillNickname from '@/views/onboarding/FillNickname'
import { ReactElement } from 'react'

const Step02 = () => {
  return <FillNickname />
}
export default Step02

Step02.getLayout = function getLayout(page: ReactElement) {
  return (
    <OnboardingLayout
      currentStep={1}
      totalStep={5}
      title={['서치잇에서 활동할 프로필', '정보를 완성해주세요']}
    >
      {page}
    </OnboardingLayout>
  )
}
