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
  InputHTMLAttributes,
} from 'react'
import Button from '@/components/ui/buttons/Button'

export interface UnderlinedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | undefined
  isError?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  onClear: () => void
}

const UnderlinedInput = ({
  className,
  isError,
  value,
  onChange,
  onClear,
  ...props
}: UnderlinedInputProps) => {
  const isActive = !!value

  return (
    <InputWrapper className={className}>
      <StyledInput
        type="text"
        value={value}
        isActive={isActive}
        isError={isError}
        onChange={onChange}
        {...props}
      />
      {value && (
        <ResetButton onClick={onClear} aria-label="리셋하기">
          <Image src="/images/rounded-x-big.svg" width={17} height={17} alt="X" />
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
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`
