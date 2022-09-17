import { a11yHidden } from '@/styles/mixins'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Checkmark from '../icons/Checkmark'

const CheckboxContainer = styled.div`
  display: inline-block;
`

const CheckImage = styled(Image)``

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${a11yHidden}
`

const StyledCheckbox = styled.div<{
  darker?: boolean
  small?: boolean
  checked?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ small }) => (small ? 14 : 18)}px;
  height: ${({ small }) => (small ? 14 : 18)}px;
  background: ${({ darker, theme }) =>
    darker ? theme.color.G40 : theme.color.G20D};
  border-radius: 4px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${CheckImage} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

type Props = {
  className?: string
  checked?: boolean
  small?: boolean
  darker?: boolean
  [x: string]: any
}

const Checkbox = ({ className, checked, small, darker, ...props }: Props) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} darker={darker} small={small}>
      {checked && <Checkmark $small={small} $color={darker ? 'blue' : 'purple'} />}
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
