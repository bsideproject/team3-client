import ChannelAddLayout from '@/components/layout/page-layout/ChannelAddLayout'
import { useStore } from '@/hooks/storeHooks'
import useUser from '@/hooks/useUser'
import { Category } from '@/services/rest-api-service/categoryService'
import ChannelAddCategory from '@/views/channel/ChannelAddCategory'
import ChannelAddComplete from '@/views/channel/ChannelAddComplete'
import ChannelAddSearch from '@/views/channel/ChannelAddSearch'
import { useRouter } from 'next/router'
import { useState } from 'react'

export type ChannelInfoType = {
  id: string
  imageUrl: string
  name: string
  subscribersCount: number
}

const ChannelAddStep = () => {
  const user = useUser({ redirectTo: '/launch' })
  const router = useRouter()

  const [selectedChannel, setSelectedChannel] = useState<ChannelInfoType>()
  const [selectedCategory, setSelectedCategory] = useState<Category>()

  const { step } = router.query

  if (!user) return <div>권한 체크중...</div>
  if (!router.isReady) return <div>Loading...</div>

  switch (step) {
    case 'step01':
      return (
        <ChannelAddLayout hasPrev>
          <ChannelAddSearch
            selectedChannel={selectedChannel}
            onSelectChannel={(channel) => setSelectedChannel(channel)}
          />
        </ChannelAddLayout>
      )
    case 'step02':
      if (!selectedChannel) {
        router.replace('/channel/add/step01')
        return
      }

      return (
        <ChannelAddLayout hasPrev>
          <ChannelAddCategory
            selectedChannel={selectedChannel}
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </ChannelAddLayout>
      )
    case 'complete':
      if (!selectedChannel || !selectedCategory) {
        router.replace('/channel/add/step01')
        return
      }

      return (
        <ChannelAddLayout>
          <ChannelAddComplete addedChannel={selectedChannel} />
        </ChannelAddLayout>
      )
    default:
      throw new Error('정의되지 않은 단계입니다.')
  }
}
export default ChannelAddStep
