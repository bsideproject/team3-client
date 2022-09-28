import { useStore } from '@/hooks/storeHooks'
import { userService } from '@/services'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const RedirectToOnboarding = () => {
  const router = useRouter()
  const { onboardingStore } = useStore()

  useEffect(() => {
    if (!router.isReady) return
    ;(async () => {
      const { providerToken } = router.query

      try {
        await userService.getJwtToken(providerToken as string)

        router.replace('/')
      } catch (err) {
        const query = router.query

        onboardingStore.setProviderToken(query.providerToken as string)
        onboardingStore.setNickname(query.name as string)
        onboardingStore.setProfileImageUrl(query.profileImageUrl as string)

        router.replace('/onboarding/step01')
      }
    })()
  }, [router, onboardingStore])

  return <div>Loading...</div>
}
export default RedirectToOnboarding
