import { a11yHidden, gradientText } from '@/styles/mixins'
import React, { forwardRef, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenInput = styled.input`
  ${a11yHidden}
`

const StyledLabel = styled.label<{ light?: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  transition: background 0.3s;
  cursor: pointer;

  border: 1px solid
    ${({ light, theme }) => (light ? theme.color.G40 : theme.color.G50D)};
  border-radius: 74px;
  background: none;

  :has(${HiddenInput}:checked) {
    position: relative;
    border: 2px solid transparent;
    border-radius: 74px;
    background: ${({ theme }) => theme.color.G20D};
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
      background: ${({ theme }) => theme.gradient.G100};
      z-index: -1;
      border-radius: 74px;
    }
  }
`

const StyledText = styled.span<{
  small?: boolean
  light?: boolean
}>`
  transition: all 0.3s;

  ${({ theme, small }) => (small ? theme.typo.H50R : theme.typo.H100R)}
  color: ${({ theme, light }) => (light ? theme.color.G60 : theme.color.G30D)};

  ${HiddenInput}:checked ~ & {
    ${gradientText}
    ${({ theme, small }) => (small ? theme.typo.H50B : theme.typo.H100B)}
  }
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  image?: string
  text: string
  small?: boolean
  light?: boolean
}

const LabeledCheckbox = forwardRef<HTMLInputElement, Props>(
  ({ className, image, text, small, light, ...props }: Props, ref) => (
    <CheckboxContainer className={className}>
      <StyledLabel light={light}>
        <HiddenInput type="checkbox" ref={ref} {...props} />

        {image && image + ' '}
        <StyledText small={small} light={light}>
          {text}
        </StyledText>
      </StyledLabel>
    </CheckboxContainer>
  )
)
LabeledCheckbox.displayName = 'LabeledCheckbox'

export default LabeledCheckbox
