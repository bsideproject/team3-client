import ReviewAdd from '@/components/domain/review/add/ReviewAdd'
import ReviewAddLayout from '@/components/layout/page-layout/ReviewAddLayout'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const ReviewAddPage = () => {
  const router = useRouter()

  return <ReviewAdd channelSeq={router.query.channelSeq as string} />
}
export default ReviewAddPage

ReviewAddPage.getLayout = function getLayout(page: ReactElement) {
  return <ReviewAddLayout>{page}</ReviewAddLayout>
}