import EmptyLayout from '@/components/layout/page-layout/EmptyLayout'
import OnboardingProgressLayout from '@/components/layout/page-layout/OnboardingProgressLayout'
import { useStore } from '@/hooks/storeHooks'
import SetCategory from '@/views/onboarding/SetCategory'
import SetMoreProfile from '@/views/onboarding/SetMoreProfile'
import SetNickname from '@/views/onboarding/SetNickname'
import SetProfileImage from '@/views/onboarding/SetProfileImage'
import SetTermsAgreement from '@/views/onboarding/SetTermsAgreement'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Onboarding = observer(() => {
  const { onboardingStore } = useStore()
  const router = useRouter()

  // // 구글인증 여부 확인
  // const authenticated = onboardingStore.providerToken

  useEffect(() => {
    // // 구글인증 안했으면 온보딩 진입 못함
    // if (!authenticated) {
    //   router.replace('/')
    // }

    onboardingStore.setCurrentProgress(4)
  }, [onboardingStore /* , router, authenticated */])

  // if (!authenticated) return <p>인증여부 확인중...</p>

  switch (onboardingStore.currentProgress) {
    case 0:
      return (
        <EmptyLayout>
          <SetTermsAgreement />
        </EmptyLayout>
      )
    case 1:
      onboardingStore.setProgressTitle([
        '서치잇에서 활동할 프로필',
        '정보를 완성해주세요',
      ])
      return (
        <OnboardingProgressLayout>
          <SetNickname />
        </OnboardingProgressLayout>
      )
    case 2:
      onboardingStore.setProgressTitle([
        `${onboardingStore.nickname}님,`,
        '프로필사진을 변경해주세요!',
      ])
      return (
        <OnboardingProgressLayout>
          <SetProfileImage />
        </OnboardingProgressLayout>
      )
    case 3:
      onboardingStore.setProgressTitle([
        `${onboardingStore.nickname}님이 궁금해요!`,
        '조금 더 알려주세요.',
      ])
      return (
        <OnboardingProgressLayout>
          <SetMoreProfile />
        </OnboardingProgressLayout>
      )
    case 4:
      onboardingStore.setProgressTitle([
        `${onboardingStore.nickname}님의 관심사를`,
        '3개 이상 골라주세요!',
      ])
      return (
        <OnboardingProgressLayout>
          <SetCategory />
        </OnboardingProgressLayout>
      )
    default:
      throw new Error('정의되지 않은 단계입니다.')
  }
})
export default Onboarding
