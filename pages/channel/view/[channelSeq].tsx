import ChannelViewLayout from '@/components/layout/page-layout/ChannelViewLayout'
import ChannelView from '@/components/domain/channel/view/ChannelView'
import { ReactElement, useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import { ChannelDetailInfo } from '@/types/channel-types'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { channelDetailsQueryKey } from '@/constants/query-keys'
import { channelService } from '@/services'
import { ReviewDetailInfo } from '@/types/review-types'
import { useEffect } from 'react'

type Props = {
  channelSeq: number
}

const ChannelViewPage = ({ channelSeq }: Props) => {
  const [hideHeader, setHideHeader] = useState(true)

  useEffect(() => {
    const channelViewHeaderEl = document.getElementById('channel-view-header')
    const channelInfoSectionEl = document.getElementById('channel-info-section')

    window.addEventListener('scroll', (e) => {
      const headerBottom = channelViewHeaderEl?.getBoundingClientRect().bottom ?? 0
      const infoSectionTop = channelInfoSectionEl?.getBoundingClientRect().top ?? 0

      if (headerBottom >= infoSectionTop) {
        setHideHeader(false)
      } else {
        setHideHeader(true)
      }
    })
  }, [])

  return (
    <ChannelViewLayout channelSeq={channelSeq} hideHeader={hideHeader}>
      <ChannelView channelSeq={channelSeq} />
    </ChannelViewLayout>
  )
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
