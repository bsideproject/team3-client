import MypageReviews from '@/components/domain/mypage/reviews'
import MypageReviewLayout from '@/components/layout/page-layout/MypageReviewsLayout'
import { ReactElement } from 'react'
import { createGlobalStyle } from 'styled-components'

const MypageReviewsPage = () => {
  return (
    <>
      <AdditionalGlobalStyle />
      <MypageReviews />
    </>
  )
}
export default MypageReviewsPage

MypageReviewsPage.getLayout = function getLayout(page: ReactElement) {
  return <MypageReviewLayout>{page}</MypageReviewLayout>
}

const AdditionalGlobalStyle = createGlobalStyle`
	html {
		background: ${({ theme }) => theme.color.G30};
	}
`
