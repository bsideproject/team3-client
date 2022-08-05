import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { MouseEventHandler, useCallback, useEffect } from 'react'

const SetProfileImage = observer(() => {
  const router = useRouter()
  const { onboardingStore } = useStore()

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    router.push('/onboarding/step04')
  }, [router])

  return (
    <>
      <OnboardingConfirmButton
        disabled={true}
        isFinal={false}
        displayText="다음 단계로"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetProfileImage
