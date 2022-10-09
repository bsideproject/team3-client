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

export type Review = {
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
  youtube_channel: {
    title: string
    thumbnail_url: string
    youtube_channel_user_category_list: Array<{
      category_id: number
      category: string
    }>
  }
}

export type MypageReview = {
  comment_count: number
  created_date: string
  id: number
  like_count: number
  modified_date: string
  review_count: number
  star_rating: number
  subscriber_count: number
  tag_list: string[]
  thumbnail_url: string
  title: string
  video_count: number
  youtube_channel_id: string
  review_body: string
}
