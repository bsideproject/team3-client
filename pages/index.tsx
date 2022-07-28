import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const Home = observer(() => {
  const { themeStore } = useStore()

  const handleClick = () => {
    console.log(themeStore.theme)
    if (themeStore.theme === 'dark') {
      themeStore.theme = 'light'
    } else {
      themeStore.theme = 'dark'
    }
  }
  return <button onClick={handleClick}>테마토글</button>
})

export default Home
