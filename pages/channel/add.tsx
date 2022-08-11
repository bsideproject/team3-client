import { useStore } from '@/hooks/storeHooks'
import ChannelAdd from '@/views/channel/ChannelAdd'
import { useEffect } from 'react'

const ChannelAddPage = () => {
  const { themeStore } = useStore()

  useEffect(() => {
    themeStore.changeToLightMode()
  }, [themeStore])

  return <ChannelAdd />
}
export default ChannelAddPage
