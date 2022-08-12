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
import UnderlinedInput from './UnderlinedInput'

interface Props extends HTMLAttributes<HTMLInputElement> {
  value?: string
  isError?: boolean
  onSearch?: (inputValue: string | undefined) => void
}

const SearchInput = ({ isError, value, onSearch, ...props }: Props) => {
  const [inputValue, setInputValue] = useState(value)

  console.log('parent')
  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInputValue(e.currentTarget.value)
    },
    []
  )

  const isActive = !!inputValue

  return (
    <InputWrapper>
      <StyledUnderlinedInput
        value={inputValue}
        isError={isError}
        onChange={handleChangeInput}
        {...props}
      />
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

const StyledUnderlinedInput = styled(UnderlinedInput)``

const InputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  ${StyledUnderlinedInput} {
    flex: 1;
  }
`

const SearchButton = styled(Button)`
  width: 52px;
  height: 30px;
  border-radius: 4px;

  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G0};
  background: ${({ theme }) => theme.color.PB600};

  :disabled {
    color: ${({ theme }) => theme.color.G50};
    background: ${({ theme }) => theme.color.G30};
  }
`
