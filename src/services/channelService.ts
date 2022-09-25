import {
  ChannelSearchInfo,
  ChannelCategory,
  ChannelLocalSearchInfo,
  ChannelDetailInfo,
} from '@/types/channel-types'
import commonClient from './clients/commonClient'

//********************* Request Body *************************

type ChannelAddRequestBody = {
  youtube_channel_id: string
  user_categories: Array<number>
}

//********************* Response Body ************************

type ChannelSearchResponseBody = {
  youtube_channel_id: string
  title: string
  thumbnail_url: string
  subscriber_count: number
  is_registered: boolean
}

type ChannelLocalSearchResponseBody = Array<{
  id: number
  youtube_channel_id: string
  title: string
  thumbnail_url: string
  subscriber_count: number
  review_count: number
}>

type ChannelInfoResponseBody = {
  avg_star_rating: number
  youtube_channel_id: string
  country: string
  created_date: string
  description: string
  id: number
  modified_date: string
  published_date_time: string
  review_count: number
  subscriber_count: number
  thumbnail_url: string
  title: string
  user_categories: Array<{
    category_id: number
    category_name: string
  }>
  video_count: number
  view_count: number
}

type ChannelAddResponseBody = {
  id: number
  youtube_channel_id: string
  title: string
  description: string
  thumbnail_url: string
  subscriber_count: number
  view_count: 0
  video_count: 0
  published_date_time: string
  country: string
  userCategories: Array<{
    category_id: number
    category_name: string
  }>
}

type ChannelCategoriesResponseBody = Array<{
  category_id: number
  category: string
}>

//********************* Method *******************************

export async function getChannelBySeq(channelSeq: number) {
  const response: ChannelInfoResponseBody = await commonClient.get(
    `/youtube/channel/${channelSeq}`
  )

  const data: ChannelDetailInfo = {
    channelSeq: response.id,
    channelId: response.youtube_channel_id,
    avgRating: response.avg_star_rating,
    country: response.country,
    createdDate: response.created_date,
    description: response.description,
    modifiedDate: response.modified_date,
    publishedDateTime: response.published_date_time,
    reviewsCount: response.review_count,
    subscribersCount: response.subscriber_count,
    imageUrl: response.thumbnail_url,
    name: response.title,
    userCategories: response.user_categories.map((category) => ({
      id: category.category_id,
      label: category.category_name,
    })),
    userTags: [],
    videosCount: response.video_count,
    viewsCount: response.view_count,
  }

  return data
}

export async function getChannelByVideoUrl(videoUrl: string) {
  const response: ChannelSearchResponseBody = await commonClient.get(
    '/youtube/channel',
    {
      params: {
        videoUrl: encodeURI(videoUrl),
      },
    }
  )

  const data: ChannelSearchInfo = {
    id: response.youtube_channel_id,
    name: response.title,
    subscribersCount: response.subscriber_count,
    imageUrl: response.thumbnail_url,
    isRegistered: response.is_registered,
  }

  return data
}

export async function getChannelByTitle(title: string) {
  const response: ChannelLocalSearchResponseBody = await commonClient.get(
    '/youtube/channel',
    {
      params: {
        title: encodeURI(title),
      },
    }
  )

  const data: ChannelLocalSearchInfo[] = response.map((item) => ({
    channelSeq: item.id,
    imageUrl: item.thumbnail_url,
    name: item.title,
    subscribersCount: item.subscriber_count,
    reviewsCount: item.review_count,
  }))

  return data
}

export async function addChannel({
  channelInfo: { id },
  category,
}: {
  channelInfo: ChannelSearchInfo
  category: ChannelCategory
}) {
  const requestBody: ChannelAddRequestBody = {
    youtube_channel_id: id,
    user_categories: [category.id],
  }

  const response: ChannelAddResponseBody = await commonClient.post(
    '/youtube/channel',
    requestBody
  )

  return { channelSeq: response.id }
}

export async function getChannelCategories() {
  const response: ChannelCategoriesResponseBody = await commonClient.get(
    '/getCategories'
  )

  const channelCategories: ChannelCategory[] = response.map((category) => ({
    id: category.category_id,
    label: category.category,
  }))

  return channelCategories
}
