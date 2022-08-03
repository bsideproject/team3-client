import OnboardingLayout from '@/components/layout/page-layout/OnboardingLayout'
import { useStore } from '@/hooks/storeHooks'
import SetProfileImage from '@/views/onboarding/SetProfileImage'
import { ReactElement, useEffect } from 'react'

const Step03 = () => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setTotalStep(5)
    onboardingStore.setCurrentStep(2)
    onboardingStore.setStepTitle([
      `${onboardingStore.nickname}님,`,
      '프로필사진을 변경해주세요!',
    ])
  }, [onboardingStore])

  return <SetProfileImage />
}
export default Step03

Step03.getLayout = function getLayout(page: ReactElement) {
  return <OnboardingLayout>{page}</OnboardingLayout>
}
