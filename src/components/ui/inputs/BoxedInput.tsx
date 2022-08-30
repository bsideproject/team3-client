import Image from 'next/image'
import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import Button from '../buttons/Button'
import Input from './Input'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  value?: string
  hasBackground?: boolean
  onClear: () => void
}

const BoxedInput = ({
  className,
  value,
  hasBackground = false,
  onClear,
  ...props
}: Props) => {
  return (
    <InputWrapper className={className}>
      <StyledInput
        type="text"
        value={value}
        hasBackground={hasBackground}
        {...props}
      />
      {/* {value && ( */}
      <ResetButton aria-label="리셋" onClick={() => onClear()}>
        <Image src="/images/x-bold.svg" width={22} height={22} alt="X" />
      </ResetButton>
      {/* )} */}
    </InputWrapper>
  )
}

export default BoxedInput

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const StyledInput = styled(Input)<{ hasBackground: boolean }>`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.color.G30};
  border-radius: 4px;
  ${({ theme }) => theme.typo.P100R}
  padding-left: 8px;
  color: ${({ theme }) => theme.color.G100};

  ::placeholder {
    color: ${({ theme }) => theme.color.G50};
  }
`

const ResetButton = styled(Button)`
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
`
