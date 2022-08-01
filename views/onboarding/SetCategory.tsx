import { OnboardingConfirmButton } from '@/components/ui/buttons'

const SetCategory = () => {
  return (
    <>
      <form id="form"></form>
      <OnboardingConfirmButton form="form" disabled={true} isFinal={true} />
    </>
  )
}
export default SetCategory
