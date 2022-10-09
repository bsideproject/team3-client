import { HTMLAttributes } from 'react'
import BookmarkIcon from '../icons/BookmarkIcon'
import Button from './Button'

type Props = HTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}

const BookmarkButton = ({ className, active, ...rest }: Props) => {
  return (
    <Button
      className={className}
      type="button"
      aria-label={`속삭이는 몽자 ${true ? '북마크 하기' : '북마크 취소'}`}
      {...rest}
    >
      <BookmarkIcon $active={active} />
    </Button>
  )
}
export default BookmarkButton
