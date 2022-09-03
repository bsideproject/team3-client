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
  onSearch: () => void
}

const BoxedSearchInput = ({
  className,
  value,
  hasBackground = false,
  onClear,
  onSearch,
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
        <Image src="/images/rounded-x.svg" layout="fill" alt="X" />
      </ResetButton>
      <Separator />
      <SearchButton aria-label="검색" onClick={onSearch}>
        <Image src="/images/search-mag-glass-bold.svg" layout="fill" alt="돋보기" />
      </SearchButton>
      {/* )} */}
    </InputWrapper>
  )
}

export default BoxedSearchInput

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
  padding-left: 10px;
  color: ${({ theme }) => theme.color.G100};

  ::placeholder {
    color: ${({ theme }) => theme.color.G50};
  }
`

const ResetButton = styled(Button)`
  position: absolute;
  right: 51px;
  top: 50%;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
`

const Separator = styled.div`
  position: absolute;
  right: 42px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 24px;
  background: ${({ theme }) => theme.color.G40};
`

const SearchButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`
