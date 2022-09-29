import { reviewService } from '@/services'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useContext, useEffect } from 'react'
import { ReviewListContext } from 'src/contexts/review-contexts'
import styled from 'styled-components'
import ChannelReviewBriefItem from './ChannelReviewBriefItem'

const ChannelReviewBriefList = () => {
  const { channelSeq } = useContext(ReviewListContext)
  const { data } = useInfiniteQuery(['review-list', channelSeq], ({ pageParam }) =>
    reviewService.getReviewList({ channelId: channelSeq })
  )

  useEffect(() => {
    console.log('test', data)
  }, [data])

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
