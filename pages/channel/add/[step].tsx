import ChannelAddLayout from '@/components/layout/page-layout/ChannelAddLayout'
import { useStore } from '@/hooks/storeHooks'
import useUser from '@/hooks/useUser'
import ChannelAddCategory from '@/views/channel/ChannelAddCategory'
import ChannelAddSearch from '@/views/channel/ChannelAddSearch'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'

export type ChannelInfoType = {
  id: string
  imageUrl: string
  name: string
  subscribersCount: number
}

const ChannelAddStep = () => {
  const user = useUser({ redirectTo: '/launch' })
  const { themeStore } = useStore()
  const router = useRouter()

  const [selectedChannel, setSelectedChannel] = useState<ChannelInfoType>()

  const { step } = router.query

  useEffect(() => {
    themeStore.changeToLightMode()

    if (!router.isReady) return
  }, [themeStore, router])

  if (!user) return <div>권한 체크중...</div>
  if (!router.isReady) return <div>Loading...</div>

  switch (step) {
    case 'step01':
      return (
        <ChannelAddSearch
          selectedChannel={selectedChannel}
          onSelectChannel={(channel) => setSelectedChannel(channel)}
        />
      )
    case 'step02':
      if (!selectedChannel) {
        router.replace('/onboarding/step01')
        return
      }

      return <ChannelAddCategory selectedChannel={selectedChannel} />
    default:
      throw new Error('정의되지 않은 단계입니다.')
  }
}
export default ChannelAddStep

ChannelAddStep.getLayout = function getLayout(page: ReactElement) {
  return <ChannelAddLayout>{page}</ChannelAddLayout>
}
