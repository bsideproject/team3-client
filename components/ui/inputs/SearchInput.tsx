import Image from 'next/image'
import {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  HTMLAttributes,
  AllHTMLAttributes,
  InputHTMLAttributes,
  useEffect,
} from 'react'
import styled, { css } from 'styled-components'
import Button from '@/components/ui/buttons/Button'
import UnderlinedInput from './UnderlinedInput'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string | undefined
  isError?: boolean
  onSearch: (value: string | undefined) => void
  onChange: ChangeEventHandler<HTMLInputElement>
  onClear: () => void
}

const SearchInput = ({
  isError,
  value,
  onSearch,
  onChange,
  onClear,
  ...props
}: Props) => {
  const isActive = !!value

  return (
    <InputWrapper>
      <StyledUnderlinedInput
        value={value}
        isError={isError}
        onChange={onChange}
        onClear={onClear}
        {...props}
      />
      <SearchButton disabled={isError || !isActive} onClick={() => onSearch(value)}>
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
