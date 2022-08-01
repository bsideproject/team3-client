import Grid from '@/components/layout/grid-layout/Grid'
import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { ChangeEventHandler, useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

type FormValues = {
  nickName: string
}

const FillNickname = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const [wordCount, setWordCount] = useState(0)

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    (data) => console.log(data),
    []
  )

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.currentTarget.value
      setWordCount(value.length)
    },
    []
  )

  return (
    <>
      <StyledGrid>
        <StyledForm id="form" onSubmit={handleSubmit(onSubmit)}>
          <NicknameInput
            {...register('nickName')}
            placeholder="사용할 닉네임을 입력해주세요"
            onChange={handleInputChange}
          />
          <WordCount>{wordCount | 0} / 20</WordCount>
        </StyledForm>
      </StyledGrid>
      <OnboardingConfirmButton form="form" disabled={true} isFinal={false} />
    </>
  )
}
export default FillNickname

const StyledGrid = styled(Grid)`
  grid-template-rows: 142px 1fr;
  place-items: end center;
  height: 100%;
`

const StyledForm = styled.form`
  grid-column: 1 / 5;
  text-align: center;
  width: 100%;
`

const NicknameInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  margin-bottom: 11px;
  ${({ theme }) => theme.typo.H75B}
  color: ${({ theme }) => theme.color.G20D};
  outline: none;
  text-align: center;

  :focus {
    border-bottom: 1px solid ${({ theme }) => theme.color.G50D};
    margin-bottom: 10px;
  }

  :not(:placeholder-shown) {
    border-bottom: 1px solid ${({ theme }) => theme.color.G50D};
    padding-bottom: 11px;
    margin-bottom: 10px;
  }

  ::placeholder {
    ${({ theme }) => theme.typo.H100R}
    color: ${({ theme }) => theme.color.G60};
  }
`

const WordCount = styled.span`
  ${({ theme }) => theme.typo.PE50}
  color: ${({ theme }) => theme.color.G30D};
`
