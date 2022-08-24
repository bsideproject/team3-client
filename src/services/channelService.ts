import { ChannelCategory } from '@/types/categoryTypes'
import commonClient from './clients/commonClient'

//********************* Props ********************************

//********************* Request Body *************************

//********************* Response Body ************************

interface ChannelSearchResponseBody {
  channelId: string
  title: string
  thumbnailUrl: string
  subscriberCount: number
}

type ChannelCategoriesResponseBody = Array<string>

//********************* Method *******************************

export async function getChannelFromVideoUrl(videoUrl: string) {
  const data: ChannelSearchResponseBody = await commonClient.get(
    '/youtube/channel',
    {
      params: {
        videoUrl: encodeURI(videoUrl),
      },
    }
  )

  return data
}

export async function getChannelCategories() {
  const response: ChannelCategoriesResponseBody = await commonClient.get(
    '/getCategories'
  )

  return response as ChannelCategory[]
}
