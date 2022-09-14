import MypageCategoryLayout from '@/components/layout/page-layout/MypageCategoryLayout'
import { ReactElement } from 'react'

const MypageCategoryPage = () => {
  return <div>MypageCategoryPage</div>
}
export default MypageCategoryPage

MypageCategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <MypageCategoryLayout>{page}</MypageCategoryLayout>
}
