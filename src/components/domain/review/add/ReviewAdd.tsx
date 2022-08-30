import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import ConfirmButtonLight from '@/components/ui/buttons/ConfirmButtonLight'
import { useState } from 'react'
import styled from 'styled-components'
import DetailReview from './DetailReview'
import QuickReview from './QuickReview'
import Rating from './Rating'
import ReviewChannel from './ReviewChannel'
import Tags from './Tags'

type Props = {
  channelSeq: string | undefined
}

const ReviewAdd = ({ channelSeq }: Props) => {
  const [selectedChannelSeq, setSelectedChannelSeq] = useState<string | undefined>(
    channelSeq
  )
  const [rating, setRating] = useState(0)
  const [tags, setTags] = useState<Array<string>>([])
  const [quickReview, setQuickReview] = useState('')
  const [detailReview, setDetailReview] = useState('')

  const isConfirmActive = selectedChannelSeq && rating !== 0 && detailReview

  return (
    <>
      <StyledGrid>
        <StyledReviewChannel channelSeq={selectedChannelSeq} />
        <StyledRating rating={rating} onSetRating={setRating} />
        <StyledTags tags={tags} onChangeTags={setTags} />
        <StyledQuickReview word={quickReview} onChangeWord={setQuickReview} />
        <StyledDetailReview word={detailReview} onChangeWord={setDetailReview} />
      </StyledGrid>
      <ConfirmButtonLight displayText="등록하기" disabled={!isConfirmActive} />
    </>
  )
}
export default ReviewAdd

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 21px auto 32px auto 45px auto 32px auto 32px auto;
`

const StyledReviewChannel = styled(ReviewChannel)`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
`

const StyledRating = styled(Rating)`
  grid-column: 1 / -1;
  grid-row: 4 / 5;
`

const StyledTags = styled(Tags)`
  grid-column: 1 / -1;
  grid-row: 6 / 7;
`

const StyledQuickReview = styled(QuickReview)`
  grid-column: 1 / -1;
  grid-row: 8 / 9;
`

const StyledDetailReview = styled(DetailReview)`
  grid-column: 1 / -1;
  grid-row: 10 / 11;
`
