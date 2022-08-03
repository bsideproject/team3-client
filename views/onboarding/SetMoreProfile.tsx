import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { observer } from 'mobx-react-lite'

const SetMoreProfile = observer(() => {
  return (
    <>
      <OnboardingConfirmButton
        disabled={true}
        isFinal={false}
        displayText="다음 단계로"
      />
    </>
  )
})
export default SetMoreProfile
