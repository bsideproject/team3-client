import ReviewAdd from '@/components/domain/review/add'
import ReviewAddLayout from '@/components/layout/page-layout/ReviewAddLayout'
import { ChannelLocalSearchInfo } from '@/types/channel-types'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const ReviewAddPage = () => {
  const router = useRouter()

  if (!router.isReady) return <div>Loading...</div>

  const channelSeqQuery = router.query.channelSeq as string | undefined
  const channelSeq = channelSeqQuery ? Number(channelSeqQuery) : undefined

  return <ReviewAdd channelSeq={channelSeq && Number(channelSeq)} />
}
export default ReviewAddPage

ReviewAddPage.getLayout = function getLayout(page: ReactElement) {
  return <ReviewAddLayout>{page}</ReviewAddLayout>
}
