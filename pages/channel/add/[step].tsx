import ChannelAddLayout from '@/components/layout/page-layout/ChannelAddLayout'
import { useStore } from '@/hooks/storeHooks'
import { useUser } from '@/hooks/queries/user/userQueries'
import ChannelAddCategory from '@/components/domain/channel/add/ChannelAddCategory'
import ChannelAddComplete from '@/components/domain/channel/add/ChannelAddComplete'
import ChannelAddSearch from '@/components/domain/channel/add/ChannelAddSearch'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Error from 'next/error'
import { ChannelCategory, ChannelSearchInfo } from '@/types/channel-types'

const ChannelAddStep = () => {
  const user = useUser({ redirectTo: '/launch' })
  const router = useRouter()

  const [selectedChannel, setSelectedChannel] = useState<ChannelSearchInfo | null>(
    null
  )
  const [selectedCategory, setSelectedCategory] = useState<ChannelCategory | null>(
    null
  )

  if (!user?.isLoggedIn || !router.isReady) return <div>Loading...</div>

  const { step } = router.query

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
          <ChannelAddComplete />
        </ChannelAddLayout>
      )
    default:
      return <Error statusCode={404} />
  }
}
export default ChannelAddStep
