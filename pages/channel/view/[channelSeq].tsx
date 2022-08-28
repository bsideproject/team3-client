import ChannelViewLayout from '@/components/layout/page-layout/ChannelViewLayout'
import ChannelView from '@/components/domain/channel/view/ChannelView'
import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { ChannelDetailInfo } from '@/types/channelTypes'

type Props = {
  channelInfo: ChannelDetailInfo
}

const ChannelViewPage = ({ channelInfo }: Props) => {
  return <ChannelView channelInfo={channelInfo} />
}
export default ChannelViewPage

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const channelSeq = query.channelSeq

  return {
    props: {
      channelInfo: {
        info: {},
        reviews: [],
      },
    },
  }
}

ChannelViewPage.getLayout = function getLayout(page: ReactElement) {
  return <ChannelViewLayout>{page}</ChannelViewLayout>
}
