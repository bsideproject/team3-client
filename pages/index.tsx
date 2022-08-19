import useUser from '@/hooks/useUser'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

const Home = observer(() => {
  const { user } = useUser()

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
