import { ChannelInfoType } from '@/pages/channel/add/[step]'

type Props = {
  selectedChannel: ChannelInfoType
}

const ChannelAddCategory = ({ selectedChannel }: Props) => {
  return <div style={{ color: '#000' }}>{selectedChannel.name}</div>
}
export default ChannelAddCategory
