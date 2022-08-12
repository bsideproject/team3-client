import Image from 'next/image'
import {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  HTMLAttributes,
} from 'react'
import styled, { css } from 'styled-components'
import Button from '@/components/ui/buttons/Button'
import IconButton from '@/components/ui/buttons/IconButton'
import UnderlinedInput from './UnderlinedInput'

interface Props extends HTMLAttributes<HTMLInputElement> {
  value?: string
  isError?: boolean
  onSearch?: (inputValue: string | undefined) => void
}

const SearchInput = ({ isError, value, onSearch, ...props }: Props) => {
  const [inputValue, setInputValue] = useState(value)

  const handleInputReset: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    setInputValue('')
  }, [])

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInputValue(e.currentTarget.value)
    },
    []
  )

  const isActive = !!inputValue

  return (
    <InputWrapper>
      <UnderlinedInput
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
        onClick={() => onSearch && onSearch(inputValue)}
      >
        검색
      </SearchButton>
    </InputWrapper>
  )
}
export default SearchInput

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;

  ${UnderlinedInput} {
    width: 100%;
  }
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
