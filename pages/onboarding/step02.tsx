import OnboardingLayout from '@/components/layout/page-layout/OnboardingLayout'
import { useStore } from '@/hooks/storeHooks'
import SetNickname from '@/views/onboarding/SetNickname'
import { ReactElement, useEffect } from 'react'

const Step02 = () => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setTotalStep(5)
    onboardingStore.setCurrentStep(1)
    onboardingStore.setStepTitle(['서치잇에서 활동할 프로필', '정보를 완성해주세요'])
  }, [onboardingStore])

  return <SetNickname />
}
export default Step02

Step02.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
