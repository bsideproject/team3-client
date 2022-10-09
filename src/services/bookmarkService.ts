import { BookmarkedChannelInfo } from './../types/channel-types'

//* Requests */

import commonClient from './clients/commonClient'

//* Responses */

type BookmarkChannelResponse = {
  user_id: number
  youtube_channel_id: number
}

type GetBookmarkListResponse = {
  bookmark_channel_count: number
  channel_list: Array<BookmarkedChannelInfo>
}

//* Methods */

export async function bookmarkChannel(channelId: number) {
  const response: BookmarkChannelResponse = await commonClient.post(
    `/bookmark/channel/${channelId}`
  )

  return response
}

export async function getBookmarkStatus(channelId: number) {
  const response: boolean = await commonClient.get(
    `/bookmark/channelBookmark/${channelId}`
  )

  return response
}

export async function getBookmarkList() {
  const response: GetBookmarkListResponse = await commonClient.get(
    `/bookmark/channelList`
  )

  return response
}
