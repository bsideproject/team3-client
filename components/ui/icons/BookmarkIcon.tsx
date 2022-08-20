import styled from 'styled-components'
import Bookmark from '@/images/bookmark.svg'

// svg 컴포넌트 타이핑 안되는 문제 해결하자
const BookmarkIcon = styled(Bookmark).attrs({
  role: 'img',
  ['aria-labelledby']: 'title desc',
  width: '24px',
  height: '24px',
})`
  path {
    /* fill: ${({ theme }) => theme.color.G50}; */
  }
`

export default BookmarkIcon
