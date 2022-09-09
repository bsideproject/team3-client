import MyPageMain from '@/components/domain/mypage/main'
import MyPageLayout from '@/components/layout/page-layout/MyPageLayout'
import { ReactElement } from 'react'

const MyPage = () => {
  return <MyPageMain />
}
export default MyPage

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <MyPageLayout>{page}</MyPageLayout>
}
