// Type 이라는 접미어 빼기. 향후 컴포넌트 차원에서 올바른 이름 으로 바꿔보기
export type ChannelSearchInfo = {
  id: string
  imageUrl: string
  name: string
  subscribersCount: number
  isRegistered: boolean
}

export type ChannelDetailInfo = {
  info: any
  reviews: any[]
}

export type ChannelCategory = string
