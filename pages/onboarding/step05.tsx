import OnboardingLayout from '@/components/layout/page-layout/OnboardingLayout'
import { useStore } from '@/hooks/storeHooks'
import SetCategory from '@/views/onboarding/SetCategory'
import { ReactElement, useEffect } from 'react'

const Step05 = () => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setTotalStep(5)
    onboardingStore.setCurrentStep(4)
    onboardingStore.setStepTitle([
      `${onboardingStore.nickname}님의 관심사를`,
      '3개 이상 골라주세요!',
    ])
  }, [onboardingStore])

  return <SetCategory />
}
export default Step05

Step05.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
