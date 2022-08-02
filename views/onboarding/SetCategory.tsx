import { OnboardingConfirmButton } from '@/components/ui/buttons'

const SetCategory = () => {
  return (
    <>
      <form id="form"></form>
      <OnboardingConfirmButton
        form="form"
        disabled={true}
        isFinal={true}
        displayText="나만의 행성찾기"
      />
    </>
  )
}
export default SetCategory
