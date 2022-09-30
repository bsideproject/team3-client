import { reviewService } from '@/services'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useContext, useEffect } from 'react'
import { ReviewListContext } from 'src/contexts/review-contexts'
import styled from 'styled-components'
import ChannelReviewBriefItem from './ChannelReviewBriefItem'

const ChannelReviewBriefList = () => {
  const { channelSeq } = useContext(ReviewListContext)
  const { data } = useInfiniteQuery(
    ['review-list', channelSeq],
    ({ pageParam = 0 }) =>
      reviewService.getReviewList({ channelId: channelSeq, page: pageParam }),
    { getNextPageParam: (lastPage, allPages) => lastPage.page + 1 }
  )

  useEffect(() => {
    console.log('test', data)
  }, [data])

  return (
    <List>
      {data?.pages.map((page) =>
        page.content.map((reviewItem) => (
          <ChannelReviewBriefItem key={reviewItem.id} />
        ))
      )}
    </List>
  )
}
export default ChannelReviewBriefList

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
