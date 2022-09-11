import MyPageMain from '@/components/domain/mypage/main'
import MyPageMainLayout from '@/components/layout/page-layout/MyPageMainLayout'
import { ReactElement } from 'react'

const MyPage = () => {
  return <MyPageMain />
}
export default MyPage

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <MyPageMainLayout>{page}</MyPageMainLayout>
}
