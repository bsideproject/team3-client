import { reviewService } from '@/services'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useCallback, useContext, useEffect } from 'react'
import { ReviewListContext } from 'src/contexts/review-contexts'
import styled from 'styled-components'
import ChannelReviewBriefItem from './ChannelReviewBriefItem'

type Props = {
  orderBy: 'createdDate' | 'likeCount'
}

const ChannelReviewBriefList = ({ orderBy = 'createdDate' }: Props) => {
  const { channelSeq } = useContext(ReviewListContext)
  const { data, fetchNextPage } = useInfiniteQuery(
    ['review-list', channelSeq, orderBy],
    ({ pageParam = 0 }) =>
      reviewService.getReviewList({
        channelId: channelSeq,
        page: pageParam,
        sortProperty: orderBy,
      }),
    { getNextPageParam: (lastPage, allPages) => lastPage.page + 1 }
  )
  console.log(orderBy)
  useEffect(() => {
    const scrollEventHandler = () => {
      const documentElement = document.documentElement

      const extra = 100

      const bottom =
        documentElement.scrollHeight - documentElement.scrollTop <
        documentElement.clientHeight + extra
      if (bottom) {
        fetchNextPage()
      }
    }

    window.addEventListener('scroll', scrollEventHandler)

    return () => window.removeEventListener('scroll', scrollEventHandler)
  }, [fetchNextPage])

  return (
    <List>
      {data?.pages.map((page) =>
        page.content.map((reviewItem) => (
          <ChannelReviewBriefItem key={reviewItem.id} data={reviewItem} />
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
