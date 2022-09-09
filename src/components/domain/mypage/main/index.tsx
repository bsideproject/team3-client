import A11yElement from '@/components/ui/titles/A11yElement'
import { createGlobalStyle } from 'styled-components'
import EtcMenu from './EtcMenu'
import MainMenu from './MainMenu'
import Profile from './Profile'

const nickname = 'test'

const MyPageMain = () => {
  return (
    <>
      <AdditionalGlobalStyle />
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

const AdditionalGlobalStyle = createGlobalStyle`
	html {
		background: ${({ theme }) => theme.color.G30};
	}
`
