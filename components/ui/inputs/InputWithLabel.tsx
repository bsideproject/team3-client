import Image from 'next/image'
import { useEffect } from 'react'
import {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  HTMLAttributes,
} from 'react'
import styled, { css } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Button from '@/components/ui/buttons/Button'
import IconButton from '@/components/ui/buttons/IconButton'
import ErrorExclamationMark from '../icons/ErrorExclamationMark'
import UnderlinedInput from './UnderlinedInput'

interface Props {
  labelName: string
  errorMessage?: string
  renderInput: (id: string | undefined, isError: boolean) => JSX.Element
}

const SearchInput = ({ labelName, errorMessage, renderInput }: Props) => {
  const [inputId, setInputId] = useState<string>()

  useEffect(() => {
    setInputId(`SearchInput-${uuidv4()}`)
  }, [])

  const isError = !!errorMessage

  return (
    <OuterWrapper>
      <LabelWrapper>
        <StyledLabel htmlFor={inputId}>{labelName}</StyledLabel>
      </LabelWrapper>

      <div>{renderInput(inputId, isError)}</div>
      {errorMessage && (
        <ErrorMessage>
          <ErrorExclamationMark />
          {errorMessage}
        </ErrorMessage>
      )}
    </OuterWrapper>
  )
}
export default SearchInput

const OuterWrapper = styled.div`
  position: relative;
  padding-bottom: 20px;
`

const LabelWrapper = styled.div`
  margin-bottom: 10px;
`

const StyledLabel = styled.label`
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G80};
`

const ResetButton = styled(IconButton)`
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
`

const SearchButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.PB600};

  :disabled {
    color: ${({ theme }) => theme.color.G50};
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
