import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const Home = observer(() => {
  return <button>테마토글</button>
})

export default Home
