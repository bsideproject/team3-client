import EmptyLayout from '@/components/layout/page-layout/EmptyLayout'
import { ReactElement } from 'react'

const Step01 = () => {
  return <div>Step01</div>
}
export default Step01

Step01.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>
}
