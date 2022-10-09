import Button from '@/components/ui/buttons/Button'
import styled, { keyframes } from 'styled-components'

type Props = {
  onClose: () => void
  onEdit: () => void
  onDelete: () => void
}

const MoreOptions = ({ onClose, onEdit, onDelete }: Props) => {
  const handleEdit = () => {
    onEdit()
    onClose()
  }

  const handleDelete = () => {
    onDelete()
    onClose()
  }

  return (
    <>
      <BackDrop onClick={() => onClose()} />
      <Buttons>
        <Options>
          <OptionButton onClick={() => handleEdit()}>댓글 수정</OptionButton>
          <OptionButton onClick={() => handleDelete()}>댓글 삭제</OptionButton>
        </Options>
        <CancelButton onClick={() => onClose()}>취소</CancelButton>
      </Buttons>
    </>
  )
}
export default MoreOptions

const buttonsHeight = 185
const buttonsMarginBottom = 24

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  z-index: 1010;
  transform: translateX(-50%);
  width: var(--content-width, 100%);

  background: #171a1a;
  opacity: 0.2;
`

const fadeIn = keyframes`
	from {
		bottom: -${buttonsHeight}px;
	}
	to {
		bottom: ${buttonsMarginBottom}px;
	}
`

const Buttons = styled.div`
  animation: ${fadeIn} 0.3s;
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: var(--content-width, 100%);
  z-index: 1020;
  transform: translateX(-50%);

  padding: 0 24px;
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
`

const OptionButton = styled(Button)`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.color.G30};
  ${({ theme }) => theme.typo.H75R}
  color: ${({ theme }) => theme.color.G60};

  + & {
    border-top: 1px solid ${({ theme }) => theme.color.G40};
  }
`

const CancelButton = styled(Button)`
  width: 100%;
  height: 54px;

  margin-top: 10px;
  background: ${({ theme }) => theme.color.G40};
  ${({ theme }) => theme.typo.H75R}
  color: #E70000;

  border-radius: 12px;
`
