import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { MouseEventHandler, useCallback, useEffect } from 'react'

const SetCategory = observer(() => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setProgressTitle([
      `${onboardingStore.nickname}님의 관심사를`,
      '3개 이상 골라주세요!',
    ])
  }, [onboardingStore])

  const handleConfirm: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {}, [])

  return (
    <>
      <OnboardingConfirmButton
        disabled={true}
        isFinal={true}
        displayText="나만의 행성찾기"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetCategory
