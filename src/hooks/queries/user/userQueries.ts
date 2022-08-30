import { userService } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import Router from 'next/router'
import { AppUser } from '@/types/userTypes'

// 사용법: https://nextjs.org/docs/authentication#authenticating-statically-generated-pages
// useUser 하고 redirect 안하면 있든없든 걍 쓰겠다는거고, redirectTo 하면 이제 redirectIfFound 조건에 따라 리다이렉트 여부 결정
// 리다이렉트가 없다면 로딩스피너 띄울 필요가 없지만, 리다이렉트 있으면 이건 필시 권한체크하겠다는 뜻이므로 컨텐츠가 안보이도록 로딩을 띄워야함.
export function useUser({ redirectTo = '', redirectIfFound = false } = {}) {
  const { data: user } = useQuery(['user'], () => userService.getUser())

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user.isLoggedIn)
    ) {
      Router.replace(redirectTo)
    }
  }, [redirectIfFound, redirectTo, user])

  return user
}
