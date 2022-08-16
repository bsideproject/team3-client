import { useStore } from '@/hooks/storeHooks'
import useUser from '@/hooks/useUser'
import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Home = observer(() => {
  const { user } = useUser()
  const { themeStore } = useStore()

  useEffect(() => {
    themeStore.changeToDarkMode()
  }, [themeStore])

  return (
    <>
      <div>닉네임: {(user as any)?.nickname || '로그인 하세요'}</div>
      {user ? (
        <Link href="/api/auth/logout">
          <a>로그아웃</a>
        </Link>
      ) : (
        <Link href="/launch">로그인</Link>
      )}
    </>
  )
})

export default Home
