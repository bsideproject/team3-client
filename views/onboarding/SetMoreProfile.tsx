import { OnboardingConfirmButton } from '@/components/ui/buttons'

const SetMoreProfile = () => {
  return (
    <>
      <form id="form"></form>
      <OnboardingConfirmButton
        form="form"
        disabled={true}
        isFinal={false}
        displayText="다음 단계로"
      />
    </>
  )
}
export default SetMoreProfile
