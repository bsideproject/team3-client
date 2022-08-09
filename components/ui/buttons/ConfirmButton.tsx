import { gradientText } from '@/styles/mixins'
import styled, { css } from 'styled-components'
import Button from './Button'

export const confirmButtonHeight = 76
type OnboardingConfirmButtonProps = {
  backgroundGradient?: boolean
  displayText: string
}

const OnboardingConfirmButton = styled(Button).attrs<OnboardingConfirmButtonProps>(
  (props) => ({
    type: 'button',
  })
)<OnboardingConfirmButtonProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.G80D};
  height: ${confirmButtonHeight}px;
  display: flex;
  justify-content: center;
  padding-top: 16px;

  ::after {
    ${({ theme }) => theme.typo.H200B}
    color: ${({ theme }) => theme.color.G50D};
    content: '${({ displayText }) => displayText}';
  }

  :not(:disabled) {
    ::after {
      ${({ backgroundGradient, theme }) =>
        backgroundGradient
          ? css`
              color: ${theme.color.G10};
            `
          : gradientText}
    }

    ${({ backgroundGradient, theme }) =>
      backgroundGradient &&
      css`
        background: ${theme.gradient.G100};
      `}
  }
`

export default OnboardingConfirmButton
