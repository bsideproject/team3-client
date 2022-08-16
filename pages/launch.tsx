import LaunchLayout from '@/components/layout/page-layout/LaunchLayout'
import { useStore } from '@/hooks/storeHooks'
import Launch from '@/views/Launch'
import { ReactElement, useEffect } from 'react'

const LaunchPage = () => {
  const { themeStore } = useStore()

  useEffect(() => {
    themeStore.changeToDarkMode()
  }, [themeStore])

  return <Launch />
}
export default LaunchPage

LaunchPage.getLayout = function getLayout(page: ReactElement) {
  return <LaunchLayout>{page}</LaunchLayout>
}
