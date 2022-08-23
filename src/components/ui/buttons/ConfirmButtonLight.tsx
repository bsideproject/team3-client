import { gradientText } from '@/styles/mixins'
import styled, { css } from 'styled-components'
import ConfirmButton, { ConfirmButtonProps } from './ConfirmButton'

const ConfirmButtonLight = styled(ConfirmButton).attrs<ConfirmButtonProps>({
  type: 'button',
})<ConfirmButtonProps>`
  background: ${({ theme }) => theme.color.G30};

  ::after {
    color: ${({ theme }) => theme.color.G50};
  }

  :not(:disabled) {
    ::after {
      ${gradientText}
    }
  }
`

export default ConfirmButtonLight
