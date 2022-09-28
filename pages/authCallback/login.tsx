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
        window.alert('로그인에 실패하였습니다')
        router.replace('/launch')
      }
    })()
  }, [router, onboardingStore])

  return <div>Loading...</div>
}
export default RedirectToOnboarding
