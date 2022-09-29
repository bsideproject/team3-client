import { ChannelLocalSearchInfo } from '@/types/channel-types'
import { createContext } from 'react'

/**
 * Review Add
 */

export const ReviewAddSelectChannelContext = createContext({
  selectedChannel: null as ChannelLocalSearchInfo | null,
  changeSelectedChannel: (channelInfo: ChannelLocalSearchInfo) => {},
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
