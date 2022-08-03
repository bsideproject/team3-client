import { useStore } from '@/hooks/storeHooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const RedirectToOnboarding = () => {
  const router = useRouter()
  const { onboardingStore } = useStore()

  useEffect(() => {
    const query = router.query

    onboardingStore.setProviderToken(query.providerToken as string)
    onboardingStore.setEmail(query.email as string)
    onboardingStore.setProfileImageUrl(query.profileImageUrl as string)

    router.replace('/onboarding')
  }, [router, onboardingStore])

  return <div>회원가입 페이지로 이동합니다...</div>
}
export default RedirectToOnboarding
