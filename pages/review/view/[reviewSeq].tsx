import ChannelViewLayout from '@/components/layout/page-layout/ChannelViewLayout'
import ChannelView from '@/components/domain/channel/view/ChannelView'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import ReviewDetail from '@/components/domain/review/view/ReviewDetail'
import { GetServerSideProps } from 'next'
import { ReviewDetailInfo } from '@/types/reviewTypes'
import ReviewViewLayout from '@/components/layout/page-layout/ReviewViewLayout'

type Props = {
  reviewInfo: ReviewDetailInfo
}

const ReviewViewPage = ({ reviewInfo }: ReviewDetailInfo) => {
  return <ReviewDetail reviewInfo={reviewInfo}></ReviewDetail>
}
export default ReviewViewPage

const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const reviewSeq = query.reviewSeq

  return {
    props: {
      reviewInfo: {},
    },
  }
}

ReviewViewPage.getLayout = function getLayout(page: ReactElement) {
  return <ReviewViewLayout>{page}</ReviewViewLayout>
}
