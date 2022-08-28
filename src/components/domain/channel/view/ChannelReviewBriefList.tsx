import styled from 'styled-components'
import ChannelReviewBriefItem from './ChannelReviewBriefItem'

const ChannelReviewBriefList = () => {
  return (
    <List>
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
      <ChannelReviewBriefItem />
    </List>
  )
}
export default ChannelReviewBriefList

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
