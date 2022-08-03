import OnboardingLayout from '@/components/layout/page-layout/OnboardingLayout'
import { useStore } from '@/hooks/storeHooks'
import SetMoreProfile from '@/views/onboarding/SetMoreProfile'
import { ReactElement, useEffect } from 'react'

const Step04 = () => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setTotalStep(5)
    onboardingStore.setCurrentStep(3)
    onboardingStore.setStepTitle([
      `${onboardingStore.nickname}님이 궁금해요!`,
      '조금 더 알려주세요.',
    ])
  }, [onboardingStore])

  return <SetMoreProfile />
}
export default Step04

Step04.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
