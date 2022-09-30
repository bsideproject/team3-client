import { PaginationResponse } from '@/types/base-types'
import { ReviewAddFormData, ReviewItem } from '@/types/review-types'
import commonClient from './clients/commonClient'

//* Requests */

type AddReviewRequest = {
  channel_tag_list: string[]
  review_body: string
  star_rating: number
}

type GetReviewListRequest = {
  channelId: number
  page?: number
  size?: number
  sortProperty?: string
  directionString?: 'ASC' | 'DESC'
}

//* Responses */

type AddReviewResponse = {
  id: number
  channel_tag_list: Array<{
    id: number
    name: string
  }>
  comment_count: number
  like_count: number
  review_body: string
  star_rating: number
  user_info: {
    nickname: string
    picture_url: string
  }
}

type GetReviewListResponse = PaginationResponse<ReviewItem>

export async function addReview(reviewFormData: ReviewAddFormData) {
  const requestBody: AddReviewRequest = {
    channel_tag_list: reviewFormData.tags,
    review_body: reviewFormData.detailReview,
    star_rating: reviewFormData.rating,
  }

  const response: AddReviewResponse = await commonClient.post(
    `/youtube/channel/${reviewFormData.channelSeq}/review`,
    requestBody
  )

  return response
}

export async function getReviewList(request: GetReviewListRequest) {
  const { channelId, page, size, sortProperty, directionString } = request

  const response: GetReviewListResponse = await commonClient.get(
    `/youtube/channel/${channelId}/review`,
    {
      params: {
        page,
        size,
        sortProperty,
        directionString,
      },
    }
  )

  return response
}
