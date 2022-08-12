import { useEffect } from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import ErrorExclamationMark from '../icons/ErrorExclamationMark'

interface Props {
  labelName: string
  errorMessage?: string
  renderInput: (id: string | undefined, isError?: boolean) => JSX.Element
}

const InputWithLabel = ({ labelName, errorMessage, renderInput }: Props) => {
  const [inputId, setInputId] = useState<string>()

  useEffect(() => {
    setInputId(`Input-${uuidv4()}`)
  }, [])

  const isError = !!errorMessage

  return (
    <OuterWrapper>
      <LabelWrapper>
        <StyledLabel htmlFor={inputId}>{labelName}</StyledLabel>
      </LabelWrapper>

      <InputWrapper>{renderInput(inputId, isError)}</InputWrapper>
      {errorMessage && (
        <ErrorMessage>
          <ErrorExclamationMark />
          {errorMessage}
        </ErrorMessage>
      )}
    </OuterWrapper>
  )
}
export default InputWithLabel

const OuterWrapper = styled.div`
  position: relative;
  padding-bottom: 20px;
`

const LabelWrapper = styled.div`
  margin-bottom: 14px;
`

const StyledLabel = styled.label`
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G80};
`

const InputWrapper = styled.div`
  > * {
    width: 100%;
  }
`

const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  ${({ theme }) => theme.typo.P100R}
  color: #e70000;

  * {
    vertical-align: bottom;
  }
`
