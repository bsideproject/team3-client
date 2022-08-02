import { OnboardingConfirmButton } from '@/components/ui/buttons'

const SetTermsAgreement = () => {
  return (
    <>
      <form id="form"></form>
      <OnboardingConfirmButton
        form="form"
        disabled={true}
        isFinal={false}
        displayText="동의하기"
      />
    </>
  )
}
export default SetTermsAgreement
