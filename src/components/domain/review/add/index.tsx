/**
 * react-hook-form 으로 리팩토링 필요!!! 이 코드는 잘못짰다.. Context API를 쓴건 잘했지만 폼 관련된 변수, 함수를 전달하기.
 */

import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import ConfirmButtonLight from '@/components/ui/buttons/ConfirmButtonLight'
import { reviewService } from '@/services'
import { ChannelLocalSearchInfo } from '@/types/channel-types'
import { useMutation } from '@tanstack/react-query'
import Router from 'next/router'
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
  channelSeq?: number
}

const ReviewAdd = ({ channelSeq }: Props) => {
  const [selectedChannelSeq, setSelectedChannelSeq] = useState<number | undefined>(
    channelSeq
  )
  const [rating, setRating] = useState(0)
  const [tags, setTags] = useState<Array<string>>([])
  // const [quickReview, setQuickReview] = useState('')
  const [detailReview, setDetailReview] = useState('')
  const { mutate: mutateToAddReview, isLoading: isAdding } = useMutation(
    reviewService.addReview,
    {
      onSuccess: (data) => {
        Router.push(`/review/view/${data.id}`)
      },
      onError: (error) => {
        window.alert(error)
        console.error(error)
      },
    }
  )

  const handleReviewAdd = () => {
    if (!selectedChannelSeq) {
      throw new Error('채널이 선택되지 않았습니다')
      return
    }
    mutateToAddReview({
      channelSeq: selectedChannelSeq,
      rating,
      tags,
      detailReview,
    })
  }

  const changeSelectedChannel = useCallback((channelSeq: number) => {
    setSelectedChannelSeq(channelSeq)
  }, [])
  const changeRating = useCallback((rating: number) => {
    setRating(rating)
  }, [])
  const changeTags = useCallback((tags: Array<string>) => {
    setTags(tags)
  }, [])
  // const changeQuickReview = useCallback((quickReview: string) => {
  //   setQuickReview(quickReview)
  // }, [])
  const changeDetailReview = useCallback((detailReview: string) => {
    setDetailReview(detailReview)
  }, [])

  const selectedChannelContextValue = useMemo(
    () => ({
      selectedChannelSeq,
      changeSelectedChannel,
    }),
    [selectedChannelSeq, changeSelectedChannel]
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

  // const quickReviewContextValue = useMemo(
  //   () => ({
  //     quickReview,
  //     changeQuickReview,
  //   }),
  //   [quickReview, changeQuickReview]
  // )

  const detailReviewContextValue = useMemo(
    () => ({
      detailReview,
      changeDetailReview,
    }),
    [detailReview, changeDetailReview]
  )

  const isConfirmActive = selectedChannelSeq && rating !== 0 && detailReview

  return (
    <ReviewAddSelectChannelContext.Provider value={selectedChannelContextValue}>
      <ReviewAddRatingContext.Provider value={ratingContextValue}>
        <ReviewAddTagsContext.Provider value={tagsContextValue}>
          {/* <ReviewAddQuickReviewContext.Provider value={quickReviewContextValue}> */}
          <ReviewAddDetailReviewContext.Provider value={detailReviewContextValue}>
            <StyledGrid>
              <SelectChannelSection />
              <RatingSection />
              <TagsSection />
              {/* <QuickReviewSection /> */}
              <DetailReviewSection />
            </StyledGrid>
            <ConfirmButtonLight
              displayText={isAdding ? `등록중...` : `등록하기`}
              disabled={!isConfirmActive || isAdding}
              onClick={handleReviewAdd}
            />
          </ReviewAddDetailReviewContext.Provider>
          {/* </ReviewAddQuickReviewContext.Provider> */}
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
