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

  // 구글인증 여부 확인
  const authenticated = onboardingStore.providerToken

  useEffect(() => {
    // router.isReady 는 useEffect 에서만 쓰자. 바깥에서 쓰면 SSG Optimization 을 block 하므로 좋지 않음.
    if (!router.isReady) return

    // 구글인증 안했으면 온보딩 진입 못함
    if (!authenticated) {
      router.replace('/launch')
    }
  }, [router, authenticated])

  // 하지만 이런 인증 상태에서는 써도 된다. 지금 authenticated 에서 인증 체크하고 있잖아?
  // 이런건 SSG Optimization 따위 적용 할 수가 없음. 로딩바 까지 생성되면 그걸로 매우 감지덕지임.
  // 이런 상황에 router.isReady를 끼워팔아도 상관없는 것임.
  // router query를 isReady 판별하여 스위칭 조건에 삼는 행위는 매우 안좋은 것이지만..
  // 인증 때문에 운 좋게 얻어걸린 케이스인 것임.
  // 그냥 렌더링 용으로 query를 쓴다면 그때는 그냥 박으면 된다. 어차피 CSR로 채워진다.
  if (!authenticated || !router.isReady) return <p>Loading...</p>

  const { step } = router.query

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
          progressTitle={['우주라이킷에서 활동할 프로필', '정보를 완성해주세요']}
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
