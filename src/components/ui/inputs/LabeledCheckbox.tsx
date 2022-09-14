import { a11yHidden, gradientText } from '@/styles/mixins'
import React, { forwardRef, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${a11yHidden}
`

const StyledLabel = styled.label<{ checked?: boolean; light?: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  transition: background 0.3s;
  cursor: pointer;
  ${({ checked, light, theme }) =>
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
          border: 1px solid
            ${({ theme }) => (light ? theme.color.G40 : theme.color.G50D)};
          border-radius: 74px;
          background: none;
        `};
`

const StyledText = styled.span<{
  checked?: boolean
  small?: boolean
  light?: boolean
}>`
  transition: all 0.3s;
  ${({ checked, small, light }) =>
    checked
      ? css`
          ${gradientText}
          ${({ theme }) => (small ? theme.typo.H50B : theme.typo.H100B)}
        `
      : css`
          ${({ theme }) => (small ? theme.typo.H50R : theme.typo.H100R)}
          color: ${({ theme }) => (light ? theme.color.G60 : theme.color.G30D)};
        `}
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  checked?: boolean
  image?: string
  text: string
  small?: boolean
  light?: boolean
}

const LabeledCheckbox = forwardRef(
  ({ className, checked, image, text, small, light, ...props }: Props, ref) => (
    <CheckboxContainer className={className}>
      <StyledLabel checked={checked} light={light}>
        <HiddenCheckbox checked={checked} {...props} ref={ref} />

        {image && image + ' '}
        <StyledText checked={checked} small={small} light={light}>
          {text}
        </StyledText>
      </StyledLabel>
    </CheckboxContainer>
  )
)
LabeledCheckbox.displayName = 'LabeledCheckbox'

export default LabeledCheckbox
