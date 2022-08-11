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

interface Props extends HTMLAttributes<HTMLInputElement> {
  labelName: string
  value?: string
  errorMessage?: string
  onSearch: (inputValue: string | undefined) => void
}

const SearchInput = ({
  labelName,
  value,
  errorMessage,
  onSearch,
  ...props
}: Props) => {
  const [inputId, setInputId] = useState<string>()
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputId(`SearchInput-${uuidv4()}`)
  }, [])

  const handleInputReset: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    setInputValue('')
  }, [])

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInputValue(e.currentTarget.value)
    },
    []
  )

  const isError = !!errorMessage
  const isActive = !!inputValue

  return (
    <OuterWrapper>
      <LabelWrapper>
        <StyledLabel htmlFor={inputId}>{labelName}</StyledLabel>
      </LabelWrapper>

      <InputWrapper>
        <UnderlinedInput
          id={inputId}
          type="text"
          value={inputValue}
          isActive={isActive}
          isError={isError}
          onChange={handleChangeInput}
          {...props}
        />
        {inputValue && (
          <ResetButton onClick={handleInputReset} aria-label="리셋하기">
            <Image src="/images/rounded-x.svg" width={12} height={12} alt="X" />
          </ResetButton>
        )}
        <SearchButton
          disabled={isError || !isActive}
          onClick={() => onSearch(inputValue)}
        >
          검색
        </SearchButton>
      </InputWrapper>
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

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
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
