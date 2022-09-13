import A11yElement from '@/components/ui/titles/A11yElement'
import { createGlobalStyle } from 'styled-components'
import EtcMenu from './EtcMenu'
import MainMenu from './MainMenu'
import Profile from './Profile'
import { useState } from 'react'
import ConfirmModal from '@/components/ui/Modals/ConfirmModal'

const nickname = 'test'

const MyPageMain = () => {
  return (
    <>
      <A11yElement as="h1">{nickname} 마이페이지</A11yElement>
      <A11yElement as="h2">프로필 정보</A11yElement>
      <Profile />
      <A11yElement as="h2">주요 메뉴</A11yElement>
      <MainMenu />
      <A11yElement as="h2">기타 메뉴</A11yElement>
      <EtcMenu />
    </>
  )
}
export default MyPageMain
