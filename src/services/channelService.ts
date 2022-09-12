import {
  ChannelSearchInfo,
  ChannelCategory,
  ChannelLocalSearchInfo,
} from '@/types/channel-types'
import commonClient from './clients/commonClient'

//********************* Request Body *************************

type ChannelAddRequestBody = {
  channel_id: string
  user_categories: string[]
}

//********************* Response Body ************************

type ChannelSearchResponseBody = {
  channel_id: string
  title: string
  thumbnail_url: string
  subscriber_count: number
  is_registered: boolean
}

type ChannelLocalSearchResponseBody = {
  id: number
  channel_id: string
  title: string
  thumbnail_url: string
  subscriber_count: number
  review_count: number
}

type ChannelAddResponseBody = {
  id: number
  channel_id: string
  title: string
  description: string
  thumbnail_url: string
  subscriber_count: number
  view_count: 0
  video_count: 0
  published_date_time: string
  country: string
  userCategories: Array<{
    category: string
  }>
}

type ChannelCategoriesResponseBody = Array<string>

//********************* Method *******************************

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
    id: response.channel_id,
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

  const data: ChannelLocalSearchInfo = {
    channelSeq: response.id,
    imageUrl: response.thumbnail_url,
    name: response.title,
    subscribersCount: response.subscriber_count,
    reviewsCount: response.review_count,
  }

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
    channel_id: id,
    user_categories: [category],
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

  return response as ChannelCategory[]
}
