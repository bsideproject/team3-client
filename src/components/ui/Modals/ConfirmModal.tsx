import Image from 'next/image'
import Modal from 'react-modal'
import styled, { css } from 'styled-components'
import Button from '../buttons/Button'

type Props = {
  isOpen: boolean
  onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void
  message: string
  confirmLabel?: string
  closeLabel?: string
  onConfirm: () => void
  onClose: () => void
}

const ConfirmModal = ({
  isOpen,
  onRequestClose,
  message,
  confirmLabel = '확인',
  closeLabel = '닫기',
  onConfirm,
  onClose,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal__overlay"
    >
      <MessageContainer>
        <Image
          src="/images/circle-exclamation-mark-filled.svg"
          width={24}
          height={24}
          alt="느낌표 마크"
        />
        <Message>{message}</Message>
      </MessageContainer>
      <ButtonsContainer>
        <CloseButton onClick={() => onClose()}>{closeLabel}</CloseButton>
        <ConfirmButton onClick={() => onConfirm()}>{confirmLabel}</ConfirmButton>
      </ButtonsContainer>
    </Modal>
  )
}
export default ConfirmModal

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 17px 0 25px 0;
  margin-bottom: 12px;
`

const Message = styled.p`
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G90};
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 46px;
  border-radius: 8px;
`

const CloseButton = styled(Button)`
  ${buttonStyles}
  ${({ theme }) => theme.typo.P200R}
  border: 1px solid ${({ theme }) => theme.color.G40};
  color: ${({ theme }) => theme.color.G60};
`

const ConfirmButton = styled(Button)`
  ${buttonStyles}
  ${({ theme }) => theme.typo.P200B}
  color:${({ theme }) => theme.color.G0};
  background: ${({ theme }) => theme.color.PB600};
`
