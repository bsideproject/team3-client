import styled from 'styled-components'
import MypageReviewItem from './MypageReviewItem'

type Props = {
  className?: string
}

const MypageReviewList = ({ className }: Props) => {
  return (
    <List className={className}>
      <MypageReviewItem />
      <MypageReviewItem />
      <MypageReviewItem />
      <MypageReviewItem />
      <MypageReviewItem />
      <MypageReviewItem />
      <MypageReviewItem />
      <MypageReviewItem />
    </List>
  )
}
export default MypageReviewList

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
