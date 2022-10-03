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

type AddReviewCommentRequest = {
  reviewId: number
  comment_body: string
}

type GetReviewCommentListRequest = {
  reviewId: number
  page?: number
  size?: number
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

type GetReviewCommentListResponse = PaginationResponse<{
  id: number
  user_info: {
    profile_img: string
    nickname: string
  }
  comment_body: string
  created_date: string
}>

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

export async function getReviewDetails(reviewSeq: number) {
  const response: ReviewItem = await commonClient.get(
    `/youtube/channel/review/${reviewSeq}`
  )

  return response
}

export async function addReviewComment(request: AddReviewCommentRequest) {
  const requestBody = {
    comment_body: request.comment_body,
  }
  const response = await commonClient.post(
    `/youtube/channel/review/${request.reviewId}/comment`,
    requestBody
  )

  return response
}

export async function getReviewCommentList(request: GetReviewCommentListRequest) {
  const response: GetReviewCommentListResponse = await commonClient.get(
    `/youtube/channel/review/${request.reviewId}/comment`,
    {
      params: {
        page: request.page,
        size: request.size,
      },
    }
  )

  return response
}
