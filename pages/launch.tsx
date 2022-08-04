import LaunchLayout from '@/components/layout/page-layout/LaunchLayout'
import Launch from '@/views/Launch'
import { ReactElement } from 'react'

const LaunchPage = () => {
  return <Launch />
}
export default LaunchPage

LaunchPage.getLayout = function getLayout(page: ReactElement) {
  return <LaunchLayout>{page}</LaunchLayout>
}
