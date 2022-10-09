import { ChannelLocalSearchInfo } from '@/types/channel-types'
import { createContext } from 'react'

/**
 * Review Add
 */

export const ReviewAddSelectChannelContext = createContext({
  selectedChannelSeq: undefined as number | undefined,
  changeSelectedChannel: (channelSeq: number) => {},
})

export const ReviewAddRatingContext = createContext({
  rating: 0,
  changeRating: (rating: number) => {},
})

export const ReviewAddTagsContext = createContext({
  tags: [] as Array<string>,
  changeTags: (tags: Array<string>) => {},
})

export const ReviewAddQuickReviewContext = createContext({
  quickReview: '',
  changeQuickReview: (quickReview: string) => {},
})

export const ReviewAddDetailReviewContext = createContext({
  detailReview: '',
  changeDetailReview: (detailReview: string) => {},
})

export const ReviewListContext = createContext({
  channelSeq: 0 as number,
})
