import Router from 'next/router'
import { useEffect } from 'react'

const LogoutPage = () => {
  useEffect(() => {
    Router.replace('/api/auth/logout')
  }, [])

  return <div>로그아웃중...</div>
}
export default LogoutPage
