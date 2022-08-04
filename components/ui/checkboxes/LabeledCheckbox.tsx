import { a11yHidden, gradientText } from '@/styles/mixins'
import React from 'react'
import styled, { css } from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${a11yHidden}
`

const StyledLabel = styled.label<{ checked?: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  ${({ checked, theme }) =>
    checked
      ? css`
          position: relative;
          border: 2px solid transparent;
          border-radius: 74px;
          background: ${theme.color.G20D};
          background-clip: padding-box;
          padding: 9px 19px;

          &::after {
            content: '';
            /* display: block; */
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: -2px;
            right: -2px;
            background: ${theme.gradient.G100};
            z-index: -1;
            border-radius: 74px;
          }
        `
      : css`
          border: 1px solid ${({ theme }) => theme.color.G50D};
          border-radius: 74px;
          background: none;
        `};
`

const StyledText = styled.span<{ checked?: boolean }>`
  ${({ checked }) =>
    checked
      ? css`
          ${gradientText}
          ${({ theme }) => theme.typo.H100B}
        `
      : css`
          ${({ theme }) => theme.typo.H100R}
          color: ${({ theme }) => theme.color.G30D};
        `}
`

type Props = {
  className?: string
  checked?: boolean
  image?: string
  text: string
  [x: string]: any
}

const LabeledCheckbox = ({ className, checked, image, text, ...props }: Props) => (
  <CheckboxContainer className={className}>
    <StyledLabel checked={checked}>
      <HiddenCheckbox checked={checked} {...props} />

      <StyledText checked={checked}>{text}</StyledText>
    </StyledLabel>
  </CheckboxContainer>
)

export default LabeledCheckbox
