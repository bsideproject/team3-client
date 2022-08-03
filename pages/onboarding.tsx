import EmptyLayout from '@/components/layout/page-layout/EmptyLayout'
import OnboardingLayout from '@/components/layout/page-layout/OnboardingLayout'
import { useStore } from '@/hooks/storeHooks'
import SetCategory from '@/views/onboarding/SetCategory'
import SetMoreProfile from '@/views/onboarding/SetMoreProfile'
import SetNickname from '@/views/onboarding/SetNickname'
import SetProfileImage from '@/views/onboarding/SetProfileImage'
import SetTermsAgreement from '@/views/onboarding/SetTermsAgreement'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const Onboarding = observer(() => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setCurrentProgress(1)
  }, [onboardingStore])

  switch (onboardingStore.currentProgress) {
    case 0:
      return (
        <EmptyLayout>
          <SetTermsAgreement />
        </EmptyLayout>
      )
    case 1:
      return (
        <OnboardingLayout>
          <SetNickname />
        </OnboardingLayout>
      )
    case 2:
      return (
        <OnboardingLayout>
          <SetProfileImage />
        </OnboardingLayout>
      )
    case 3:
      return (
        <OnboardingLayout>
          <SetMoreProfile />
        </OnboardingLayout>
      )
    case 4:
      return (
        <OnboardingLayout>
          <SetCategory />
        </OnboardingLayout>
      )
    default:
      throw new Error('정의되지 않은 단계입니다.')
  }
})
export default Onboarding
