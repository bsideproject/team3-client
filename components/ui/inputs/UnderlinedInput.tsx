import { borderGradient } from '@/styles/mixins'
import styled, { css } from 'styled-components'
import Input from './Input'
import Image from 'next/image'
import {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  HTMLAttributes,
} from 'react'
import Button from '@/components/ui/buttons/Button'

interface Props extends HTMLAttributes<HTMLInputElement> {
  value?: string
  isError?: boolean
}

const UnderlinedInput = ({ className, isError, value, ...props }: Props) => {
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
    <InputWrapper className={className}>
      <StyledInput
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
    </InputWrapper>
  )
}
export default UnderlinedInput

const StyledInput = styled(Input)<{ isActive?: boolean; isError?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.color.G40};

  ${({ isActive }) => isActive && borderGradient(1, ['bottom'])}

  ${({ isError }) =>
    isError &&
    css`
      border-bottom: 1px solid #e70000;
    `}

  height: 30px;
  padding: 6px 0;

  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G100};

  ::placeholder {
    ${({ theme }) => theme.typo.P200R}
    color: ${({ theme }) => theme.color.G50};
  }
`

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;

  ${StyledInput} {
    width: 100%;
  }
`

const ResetButton = styled(Button)`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
`
