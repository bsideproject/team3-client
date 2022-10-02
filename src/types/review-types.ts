//   {
//   seq: number
//   rating: number
//   content: string
//   likesCount: number
//   commentsCount: number

// }

export type ReviewAddFormData = {
  channelSeq: number
  rating: number
  tags: string[]
  detailReview: string
}

export type ReviewItem = {
  comment_count: number
  created_date: string
  id: number
  like_count: number
  review_body: string
  star_rating: number
  user_info: {
    profile_img: string
    nickname: string
  }
  youtube_channel_tag_list: Array<{
    id: number
    name: string
    tag_order: number
  }>
}
