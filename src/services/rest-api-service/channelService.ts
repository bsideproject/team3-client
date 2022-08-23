import { restApiClient } from './client'

interface ChannelSearchResponse {
  channelId: string
  title: string
  thumbnailUrl: string
  subscriberCount: number
}

const channelService = {
  async getChannelFromVideoUrl(videoUrl: string) {
    const data: ChannelSearchResponse = await restApiClient.get('/youtube/channel', {
      params: {
        videoUrl: encodeURI(videoUrl),
      },
    })

    return data
  },
}

export default channelService
