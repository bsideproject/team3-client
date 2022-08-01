import { gradientText, resetButton } from '@/styles/mixins'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${resetButton}
`
export const IconButton = styled(Button)`
  width: 24px;
  height: 24px;
`

export const PrevButton = ({ ...props }) => (
  <IconButton aria-label="이전 단계로" {...props}>
    <Image
      src="/images/chevron_left.svg" // Route of the image file
      alt="왼쪽을 가리키는 V형 무늬"
      width={24}
      height={24}
    />
  </IconButton>
)

export const onboardingConfirmButtonHeight = 76
type OnboardingConfirmButtonProps = { isFinal?: boolean }

export const OnboardingConfirmButton = styled(
  Button
).attrs<OnboardingConfirmButtonProps>((props) => ({
  type: 'button',
}))<OnboardingConfirmButtonProps>`
  position: sticky;
  bottom: 0;
  width: 100%;
  background: ${({ theme }) => theme.color.G80D};
  height: ${onboardingConfirmButtonHeight}px;
  display: flex;
  justify-content: center;
  padding-top: 16px;

  ::after {
    ${({ theme }) => theme.typo.H200B}
    color: ${({ theme }) => theme.color.G50D};
    ${({ isFinal }) =>
      isFinal
        ? css`
            content: '나만의 행성찾기';
          `
        : css`
            content: '다음 단계로';
          `};
  }

  :not(:disabled) {
    ::after {
      ${({ isFinal, theme }) =>
        isFinal
          ? css`
              color: ${theme.color.G10};
            `
          : gradientText}
    }

    ${({ isFinal, theme }) =>
      isFinal &&
      css`
        background: ${theme.gradient.G100};
      `}
  }
`
