import { OnboardingConfirmButton } from '@/components/ui/buttons'

const SetProfileImage = () => {
  return (
    <>
      <form id="form"></form>
      <OnboardingConfirmButton form="form" disabled={true} isFinal={false} />
    </>
  )
}
export default SetProfileImage
