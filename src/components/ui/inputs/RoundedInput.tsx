import { borderGradient } from '@/styles/mixins'
import { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import Input from './Input'

interface RoundedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  isError?: boolean
  maxCount?: number
  onChange: ChangeEventHandler<HTMLInputElement>
  // onClear: () => void
}

const RoundedInput = forwardRef<HTMLInputElement, RoundedInputProps>(
  (
    { className, isError, value, onChange, maxCount, ...props }: RoundedInputProps,
    ref
  ) => {
    const isActive = !!value

    return (
      <InputWrapper className={className}>
        <StyledInput
          ref={ref}
          type="text"
          value={value}
          isActive={isActive}
          isError={isError}
          onChange={onChange}
          {...props}
        />
        {maxCount && (
          <WordCount>
            {value?.length ?? 0} / {maxCount}
          </WordCount>
        )}
      </InputWrapper>
    )
  }
)
RoundedInput.displayName = 'RoundedInput'

export default RoundedInput

const StyledInput = styled(Input)<{ isActive?: boolean; isError?: boolean }>`
  border: 1px solid ${({ theme }) => theme.color.G40};
  border-radius: 28px;
  padding: 9px 15px;
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G100};

  /* ${({ isActive }) => isActive && borderGradient(1)} */

  ${({ isError, isActive }) =>
    isError
      ? css`
          border: 1px solid ${({ theme }) => theme.color.SR100};
        `
      : isActive && borderGradient(1)}

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

// const ResetButton = styled(Button)`
//   position: absolute;
//   right: 8px;
//   top: 50%;
//   transform: translateY(-50%);
// `

const WordCount = styled.span`
  position: absolute;
  right: 0;
  bottom: -20px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.color.G50};
`
