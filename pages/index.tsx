import { useUser } from '@/hooks/queries/user/userQueries'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

const Home = observer(() => {
  const user = useUser()

  return (
    <>
      <div>닉네임: {user?.nickname || '로그인 하세요'}</div>
      {user?.isLoggedIn ? (
        <Link href="/api/auth/logout">
          <a>로그아웃</a>
        </Link>
      ) : (
        <Link href="/launch">
          <a>로그인</a>
        </Link>
      )}
      <br />
      <br />
      <Link href="/channel/add">채널 등록</Link>
      <br />
      <br />
      <Link href="/channel/view/1">채널 목업화면</Link>
    </>
  )
})

export default Home
