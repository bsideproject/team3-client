import { MouseEventHandler } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Pencil from '@/images/pencil.svg'

type Props = {
  className?: string
  onClick: () => void
}

const AddReviewButton = ({ className, onClick }: Props) => {
  return (
    <StyledButton className={className} onClick={onClick} aria-label="리뷰 작성">
      <Pencil />
    </StyledButton>
  )
}
export default AddReviewButton

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient.G100T};
`
