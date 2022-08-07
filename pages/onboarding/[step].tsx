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

const OnboardingStep = observer(() => {
  const { onboardingStore } = useStore()
  const router = useRouter()

  const { step } = router.query

  // // 구글인증 여부 확인
  // const authenticated = onboardingStore.providerToken

  useEffect(() => {
    if (!router.isReady) return
    // // 구글인증 안했으면 온보딩 진입 못함
    // if (!authenticated) {
    //   router.replace('/launch')
    // }
  }, [router])

  // if (!authenticated) return <p>인증여부 확인중...</p>

  if (!router.isReady) return <div>Loading...</div>

  switch (step) {
    case 'step01':
      return (
        <EmptyLayout>
          <SetTermsAgreement />
        </EmptyLayout>
      )
    case 'step02':
      return (
        <OnboardingProgressLayout
          totalProgress={5}
          currentProgress={1}
          progressTitle={['서치잇에서 활동할 프로필', '정보를 완성해주세요']}
        >
          <SetNickname />
        </OnboardingProgressLayout>
      )
    case 'step03':
      return (
        <OnboardingProgressLayout
          totalProgress={5}
          currentProgress={2}
          progressTitle={[
            `${onboardingStore.nickname}님,`,
            '프로필사진을 변경해주세요!',
          ]}
          skipTo="/onboarding/step04"
        >
          <SetProfileImage />
        </OnboardingProgressLayout>
      )
    case 'step04':
      return (
        <OnboardingProgressLayout
          totalProgress={5}
          currentProgress={3}
          progressTitle={[
            `${onboardingStore.nickname}님이 궁금해요!`,
            '조금 더 알려주세요.',
          ]}
        >
          <SetMoreProfile />
        </OnboardingProgressLayout>
      )
    case 'step05':
      return (
        <OnboardingProgressLayout
          totalProgress={5}
          currentProgress={4}
          progressTitle={[
            `${onboardingStore.nickname}님의 관심사를`,
            '3개 이상 골라주세요!',
          ]}
        >
          <SetCategory />
        </OnboardingProgressLayout>
      )
    default:
      throw new Error('정의되지 않은 단계입니다.')
  }
})
export default OnboardingStep
