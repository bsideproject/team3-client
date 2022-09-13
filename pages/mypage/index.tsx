import MyPageMain from '@/components/domain/mypage/main'
import MyPageMainLayout from '@/components/layout/page-layout/MyPageMainLayout'
import { ReactElement } from 'react'
import { createGlobalStyle } from 'styled-components'

const MyPage = () => {
  return (
    <>
      <AdditionalGlobalStyle />
      <MyPageMain />
    </>
  )
}
export default MyPage

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <MyPageMainLayout>{page}</MyPageMainLayout>
}

const AdditionalGlobalStyle = createGlobalStyle`
	html {
		background: ${({ theme }) => theme.color.G30};
	}
`
