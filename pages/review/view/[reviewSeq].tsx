import ChannelViewLayout from '@/components/layout/page-layout/ChannelViewLayout'
import ChannelView from '@/components/domain/channel/view/ChannelView'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import ReviewDetails from '@/components/domain/review/view/ReviewDetails'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import ReviewViewLayout from '@/components/layout/page-layout/ReviewViewLayout'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { reviewService } from '@/services'

type Props = {
  reviewSeq: number
}

const ReviewViewPage = ({ reviewSeq }: Props) => {
  return <ReviewDetails reviewSeq={reviewSeq} />
}
export default ReviewViewPage

ReviewViewPage.getLayout = function getLayout(page: ReactElement) {
  return <ReviewViewLayout>{page}</ReviewViewLayout>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const reviewSeq = Number(params?.reviewSeq as string)

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['review-details', reviewSeq], () =>
    reviewService.getReviewDetails(reviewSeq)
  )
  await queryClient.prefetchInfiniteQuery(
    ['review-comments', reviewSeq],
    ({ pageParam = 0 }) =>
      reviewService.getReviewCommentList({
        reviewId: reviewSeq,
        page: pageParam,
        size: 15,
      })
  )

  return {
    props: {
      reviewSeq,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
