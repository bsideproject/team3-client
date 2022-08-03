import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { observer } from 'mobx-react-lite'

const SetCategory = observer(() => {
  return (
    <>
      <OnboardingConfirmButton
        disabled={true}
        isFinal={true}
        displayText="나만의 행성찾기"
      />
    </>
  )
})
export default SetCategory
