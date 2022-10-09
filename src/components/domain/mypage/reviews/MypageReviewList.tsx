import { reviewService } from '@/services'
import { MypageReview } from '@/types/review-types'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import MypageReviewItem from './MypageReviewItem'

type Props = {
  className?: string
}

const MypageReviewList = ({ className }: Props) => {
  const { data } = useQuery(['mypage-review'], () =>
    reviewService.getMypageReviewList()
  )

  return (
    <List className={className}>
      {data?.channel_list.map((review) => (
        <MypageReviewItem key={review.id} data={review} />
      ))}
    </List>
  )
}
export default MypageReviewList

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
