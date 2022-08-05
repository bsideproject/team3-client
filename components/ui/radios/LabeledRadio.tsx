import { a11yHidden, gradientText } from '@/styles/mixins'
import React from 'react'
import styled, { css } from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  ${a11yHidden}
`

const StyledLabel = styled.label<{ checked?: boolean }>`
  display: inline-block;
  padding: 9px 19px;
  border: 1px solid ${({ theme }) => theme.color.G50D};
  border-radius: 74px;
  cursor: pointer;
  ${({ checked, theme }) =>
    checked
      ? css`
          background: ${theme.color.G20D};
        `
      : css`
          background: none;
        `};
`

const StyledText = styled.span<{ checked?: boolean }>`
  ${({ checked, theme }) =>
    checked
      ? css`
          ${theme.typo.H100B}
          color: ${theme.color.G70D};
        `
      : css`
          ${theme.typo.H100R}
          color: ${theme.color.G20D};
        `}
`

type Props = {
  className?: string
  checked?: boolean
  image?: string
  text: string
  [x: string]: any
}

const LabeledRadio = ({ className, checked, image, text, ...props }: Props) => (
  <CheckboxContainer className={className}>
    <StyledLabel checked={checked}>
      <HiddenRadio checked={checked} {...props} />

      <StyledText checked={checked}>{text}</StyledText>
    </StyledLabel>
  </CheckboxContainer>
)

export default LabeledRadio
