import ChannelViewLayout from '@/components/layout/page-layout/ChannelViewLayout'
import ChannelView from '@/views/channel/view/ChannelView'
import { ReactElement } from 'react'

const ChannelViewPage = () => {
  return <ChannelView />
}
export default ChannelViewPage

ChannelViewPage.getLayout = function getLayout(page: ReactElement) {
  return <ChannelViewLayout title="미야홍철의 냥냥펀치">{page}</ChannelViewLayout>
}
