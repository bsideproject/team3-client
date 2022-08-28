import { ChannelSearchInfo, ChannelCategory } from '@/types/channelTypes'
import commonClient from './clients/commonClient'

//********************* Request Body *************************

type ChannelAddRequestBody = {
  channelId: string
  userCategories: string[]
}

//********************* Response Body ************************

type ChannelSearchResponseBody = {
  channel_id: string
  title: string
  thumbnail_url: string
  subscriber_count: number
}

type ChannelAddResponseBody = {
  id: number
  channelId: string
  country: string
  description: string
  publishedDateTime: string
  subscriberCount: number
  thumbnailUrl: string
  title: string
  userCategories: Array<{
    category: string
  }>

  videoCount: 0
  viewCount: 0
}

type ChannelCategoriesResponseBody = Array<string>

//********************* Method *******************************

export async function getChannelFromVideoUrl(videoUrl: string) {
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
    channelId: id,
    userCategories: [category],
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
