import { useEffect } from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import ErrorExclamationMarkFilled from '../icons/ErrorExclamationMarkFilled'

interface Props {
  className?: string
  labelName: string
  errorMessage?: string
  infoMessage?: string
  renderInput: (id: string | undefined, isError?: boolean) => JSX.Element
}

const InputWithLabel = ({
  className,
  labelName,
  errorMessage,
  infoMessage,
  renderInput,
}: Props) => {
  const [inputId, setInputId] = useState<string>()

  useEffect(() => {
    setInputId(`Input-${uuidv4()}`)
  }, [])

  const isError = !!errorMessage

  return (
    <OuterWrapper className={className}>
      <LabelWrapper>
        <StyledLabel htmlFor={inputId}>{labelName}</StyledLabel>
      </LabelWrapper>

      <InputWrapper>{renderInput(inputId, isError)}</InputWrapper>
      {errorMessage ? (
        <ErrorMessage>
          <ErrorExclamationMarkFilled />
          {errorMessage}
        </ErrorMessage>
      ) : (
        <InfoMessage>{infoMessage}</InfoMessage>
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
  vertical-align: top;
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
  color: ${({ theme }) => theme.color.SR100};

  * {
    vertical-align: bottom;
  }
`

const InfoMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G50};
`
