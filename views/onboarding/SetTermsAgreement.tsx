import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { observer } from 'mobx-react-lite'

const SetTermsAgreement = observer(() => {
  return (
    <>
      <OnboardingConfirmButton
        disabled={true}
        isFinal={false}
        displayText="동의하기"
      />
    </>
  )
})
export default SetTermsAgreement
