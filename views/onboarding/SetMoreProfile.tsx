import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { MouseEventHandler, useCallback, useEffect } from 'react'

const SetMoreProfile = observer(() => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setProgressTitle([
      `${onboardingStore.nickname}님이 궁금해요!`,
      '조금 더 알려주세요.',
    ])
  }, [onboardingStore])

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    onboardingStore.setCurrentProgress(4)
  }, [onboardingStore])

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
export default SetMoreProfile
