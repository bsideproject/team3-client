import ChannelViewLayout from '@/components/layout/page-layout/ChannelViewLayout'
import ChannelView from '@/components/domain/channel/view/ChannelView'
import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { ChannelDetailInfo } from '@/types/channel-types'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { channelDetailsQueryKey } from '@/constants/query-keys'
import { channelService } from '@/services'
import { ReviewDetailInfo } from '@/types/review-types'

type Props = {
  channelSeq: number
}

const ChannelViewPage = ({ channelSeq }: Props) => {
  return <ChannelView channelSeq={channelSeq} />
}
export default ChannelViewPage

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const channelSeq = Number(query.channelSeq as string)
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(channelDetailsQueryKey(channelSeq), () =>
    channelService.getChannelBySeq(channelSeq)
  )

  return {
    props: {
      channelSeq,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

ChannelViewPage.getLayout = function getLayout(page: ReactElement) {
  return <ChannelViewLayout>{page}</ChannelViewLayout>
}
