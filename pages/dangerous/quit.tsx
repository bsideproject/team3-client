import Quit from '@/components/domain/mypage/quit'
import QuitLayout from '@/components/layout/page-layout/QuitLayout'
import { ReactElement } from 'react'
import { createGlobalStyle } from 'styled-components'

const QuitPage = () => {
  return (
    <>
      <AdditionalGlobalStyle />
      <Quit />
    </>
  )
}
export default QuitPage

QuitPage.getLayout = function getLayout(page: ReactElement) {
  return <QuitLayout>{page}</QuitLayout>
}

const AdditionalGlobalStyle = createGlobalStyle`
	html {
		background: ${({ theme }) => theme.color.G30};
	}
`
