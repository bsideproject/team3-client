import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { MouseEventHandler, useCallback, useEffect } from 'react'
import { useCategoriesQuery } from '@/hooks/queryHooks'
import { isError } from '@/utils/basicUtils'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'

const SetCategory = observer(() => {
  const { onboardingStore } = useStore()

  const { isLoading, error, data: categories } = useCategoriesQuery()

  useEffect(() => {
    onboardingStore.setProgressTitle([
      `${onboardingStore.nickname}님의 관심사를`,
      '3개 이상 골라주세요!',
    ])
  }, [onboardingStore])

  const handleConfirm: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {}, [])

  if (isLoading) return <div>Loading...</div>

  if (error && isError(error))
    return <div>{'An error has occurred: ' + error.message}</div>

  return (
    <>
      <GridContainer></GridContainer>
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
