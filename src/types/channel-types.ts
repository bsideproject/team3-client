// Type 이라는 접미어 빼기. 향후 컴포넌트 차원에서 올바른 이름 으로 바꿔보기
export type ChannelSearchInfo = {
  id: string
  imageUrl: string
  name: string
  subscribersCount: number
  isRegistered: boolean
}

export type ChannelLocalSearchInfo = {
  channelSeq: number
  imageUrl: string
  name: string
  subscribersCount: number
  reviewsCount: number
}

export type ChannelDetailInfo = {
  avgRating: number
  channelId: string
  country: string
  createdDate: string
  description: string
  channelSeq: number
  modifiedDate: string
  publishedDateTime: string
  reviewsCount: number
  subscribersCount: number
  imageUrl: string
  name: string
  userCategories: ChannelCategory[]
  userTags: Tag[]
  videosCount: number
  viewsCount: number
}

export type ChannelCategory = {
  id: number
  label: string
}

export type Tag = {
  id: number
  label: string
}

export type BookmarkedChannelInfo = {
  id: number
  review_count: number
  subscriber_count: number
  thumbnail_url: string
  title: string
  video_count: number
  youtube_channel_id: string
  youtube_channel_tag_list: string[]
  youtube_channel_user_category_list: Array<{
    category: string
    category_id: number
  }>
}
