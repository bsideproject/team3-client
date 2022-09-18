import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import ConfirmButtonLight from '@/components/ui/buttons/ConfirmButtonLight'
import { ChannelLocalSearchInfo } from '@/types/channel-types'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import {
  ReviewAddSelectChannelContext,
  ReviewAddRatingContext,
  ReviewAddTagsContext,
  ReviewAddQuickReviewContext,
  ReviewAddDetailReviewContext,
} from 'src/contexts/review-contexts'
import styled from 'styled-components'
import DetailReview from './DetailReview'
import QuickReview from './QuickReview'
import Rating from './Rating'
import SelectChannel from './SelectChannel'
import Tags from './Tags'

type Props = {
  channelInfo: ChannelLocalSearchInfo | null
}

const ReviewAdd = ({ channelInfo }: Props) => {
  const [selectedChannel, setSelectedChannel] =
    useState<ChannelLocalSearchInfo | null>(channelInfo)
  const [rating, setRating] = useState(0)
  const [tags, setTags] = useState<Array<string>>([])
  const [quickReview, setQuickReview] = useState('')
  const [detailReview, setDetailReview] = useState('')

  const changeSelectedChannel = useCallback(
    (channelInfo: ChannelLocalSearchInfo) => {
      setSelectedChannel(channelInfo)
    },
    []
  )
  const changeRating = useCallback((rating: number) => {
    setRating(rating)
  }, [])
  const changeTags = useCallback((tags: Array<string>) => {
    setTags(tags)
  }, [])
  const changeQuickReview = useCallback((quickReview: string) => {
    setQuickReview(quickReview)
  }, [])
  const changeDetailReview = useCallback((detailReview: string) => {
    setDetailReview(detailReview)
  }, [])

  const selectedChannelContextValue = useMemo(
    () => ({
      selectedChannel,
      changeSelectedChannel,
    }),
    [selectedChannel, changeSelectedChannel]
  )

  const ratingContextValue = useMemo(
    () => ({
      rating,
      changeRating,
    }),
    [rating, changeRating]
  )

  const tagsContextValue = useMemo(
    () => ({
      tags,
      changeTags,
    }),
    [tags, changeTags]
  )

  const quickReviewContextValue = useMemo(
    () => ({
      quickReview,
      changeQuickReview,
    }),
    [quickReview, changeQuickReview]
  )

  const detailReviewContextValue = useMemo(
    () => ({
      detailReview,
      changeDetailReview,
    }),
    [detailReview, changeDetailReview]
  )

  const isConfirmActive = selectedChannel && rating !== 0 && detailReview

  return (
    <ReviewAddSelectChannelContext.Provider value={selectedChannelContextValue}>
      <ReviewAddRatingContext.Provider value={ratingContextValue}>
        <ReviewAddTagsContext.Provider value={tagsContextValue}>
          <ReviewAddQuickReviewContext.Provider value={quickReviewContextValue}>
            <ReviewAddDetailReviewContext.Provider value={detailReviewContextValue}>
              <StyledGrid>
                <SelectChannelSection />
                <RatingSection />
                <TagsSection />
                {/* <QuickReviewSection /> */}
                <DetailReviewSection />
              </StyledGrid>
              <ConfirmButtonLight
                displayText="등록하기"
                disabled={!isConfirmActive}
              />
            </ReviewAddDetailReviewContext.Provider>
          </ReviewAddQuickReviewContext.Provider>
        </ReviewAddTagsContext.Provider>
      </ReviewAddRatingContext.Provider>
    </ReviewAddSelectChannelContext.Provider>
  )
}
export default ReviewAdd

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 21px auto 32px auto 45px auto 32px auto;
`

const SelectChannelSection = styled(SelectChannel)`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
`

const RatingSection = styled(Rating)`
  grid-column: 1 / -1;
  grid-row: 4 / 5;
`

const TagsSection = styled(Tags)`
  grid-column: 1 / -1;
  grid-row: 6 / 7;
`

const QuickReviewSection = styled(QuickReview)`
  grid-column: 1 / -1;
  grid-row: 8 / 9;
`

const DetailReviewSection = styled(DetailReview)`
  grid-column: 1 / -1;
  grid-row: 10 / 11;
`
