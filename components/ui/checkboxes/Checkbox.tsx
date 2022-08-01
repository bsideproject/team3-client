import { a11yHidden } from '@/styles/mixins'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;

  & + label {
    margin-left: 8px;
  }
`

const CheckImage = styled(Image)``

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${a11yHidden}
`

const StyledCheckbox = styled.div<{ checked?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background: #f8f9fa;
  border: 1px solid #ced4da;
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
  [x: string]: any
}

const Checkbox = ({ className, checked, ...props }: Props) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <CheckImage
        src="/images/checkmark.svg"
        width={10}
        height={8}
        alt="체크 마크"
      />
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
