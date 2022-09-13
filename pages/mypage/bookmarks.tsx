import Bookmarks from '@/components/domain/mypage/bookmarks'
import BookmarksLayout from '@/components/layout/page-layout/BookmarksLayout'
import { ReactElement } from 'react'
import { createGlobalStyle } from 'styled-components'

const BookmarksPage = () => {
  return (
    <>
      <AdditionalGlobalStyle />
      <Bookmarks />
    </>
  )
}
export default BookmarksPage

BookmarksPage.getLayout = function getLayout(page: ReactElement) {
  return <BookmarksLayout>{page}</BookmarksLayout>
}

const AdditionalGlobalStyle = createGlobalStyle`
	html {
		background: ${({ theme }) => theme.color.G30};
	}
`
