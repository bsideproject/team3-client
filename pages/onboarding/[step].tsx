import EmptyLayout from '@/components/layout/page-layout/EmptyLayout'
import OnboardingProgressLayout from '@/components/layout/page-layout/OnboardingProgressLayout'
import { useStore } from '@/hooks/storeHooks'
import { maskingNickname } from '@/utils/convertingValueUtils'
import SetCategory from '@/components/domain/onboarding/SetCategory'
import SetMoreProfile from '@/components/domain/onboarding/SetMoreProfile'
import SetNickname from '@/components/domain/onboarding/SetNickname'
import SetProfileImage from '@/components/domain/onboarding/SetProfileImage'
import SetTermsAgreement from '@/components/domain/onboarding/SetTermsAgreement'
import { observer } from 'mobx-react-lite'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const OnboardingStep = observer(() => {
  const { onboardingStore } = useStore()
  const router = useRouter()

  const [step, setStep] = useState<string>()

  // 구글인증 여부 확인
  const authenticated = onboardingStore.providerToken

  useEffect(() => {
    if (!router.isReady) return
    // 구글인증 안했으면 온보딩 진입 못함
    if (!authenticated) {
      router.replace('/launch')
    }

    const { step } = router.query
    setStep(step as string)
  }, [router, authenticated])

  if (!authenticated) return <p>Loading...</p>

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
            `${maskingNickname(onboardingStore.nickname)}님,`,
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
            `${maskingNickname(onboardingStore.nickname)}님이 궁금해요!`,
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
            `${maskingNickname(onboardingStore.nickname)}님의 관심사를`,
            '3개 이상 골라주세요!',
          ]}
        >
          <SetCategory />
        </OnboardingProgressLayout>
      )
    default:
      return <Error statusCode={404} />
  }
})
export default OnboardingStep
