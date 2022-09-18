import { ReviewAddFormData } from '@/types/review-types'
import commonClient from './clients/commonClient'

//* Requests */

type ReviewAddRequestBody = {
  channel_tag_list: string[]
  review_body: string
  star_rating: number
}

//* Responses */

type ReviewAddResponseBody = {
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

export async function addReview(reviewFormData: ReviewAddFormData) {
  const requestBody: ReviewAddRequestBody = {
    channel_tag_list: reviewFormData.tags,
    review_body: reviewFormData.detailReview,
    star_rating: reviewFormData.rating,
  }

  const response: ReviewAddResponseBody = await commonClient.post(
    `/youtube/channel/${reviewFormData.channelSeq}/review`,
    requestBody
  )

  return response
}
