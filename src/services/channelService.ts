import { ChannelCategory } from '@/types/categoryTypes'
import { ChannelInfoType } from '@/types/channelTypes'
import commonClient from './clients/commonClient'

//********************* Props ********************************

//********************* Request Body *************************

//********************* Response Body ************************

interface ChannelSearchResponseBody {
  channel_id: string
  title: string
  thumbnail_url: string
  subscriber_count: number
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

  const data: ChannelInfoType = {
    id: response.channel_id,
    name: response.title,
    subscribersCount: response.subscriber_count,
    imageUrl: response.thumbnail_url,
  }

  return data
}

export async function getChannelCategories() {
  const response: ChannelCategoriesResponseBody = await commonClient.get(
    '/getCategories'
  )

  return response as ChannelCategory[]
}
