import EmptyLayout from '@/components/layout/page-layout/EmptyLayout'
import Launch from '@/views/Launch'
import { ReactElement } from 'react'

const LaunchPage = () => {
  return <Launch />
}
export default LaunchPage

LaunchPage.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>
}
