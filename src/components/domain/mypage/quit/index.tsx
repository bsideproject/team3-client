import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import Button from '@/components/ui/buttons/Button'
import BoxedTextArea from '@/components/ui/inputs/BoxedTextArea'
import Checkbox from '@/components/ui/inputs/Checkbox'
import InputWithLabel from '@/components/ui/inputs/InputWithLabel'
import LightSelect from '@/components/ui/inputs/LightSelect'
import A11yElement from '@/components/ui/titles/A11yElement'
import { userService } from '@/services'
import { UserQuitFormData } from '@/types/user-types'
import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

const Quit = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserQuitFormData>()
  const [agreed, setAgreed] = useState(false)
  const { data: reasonOptions } = useQuery(
    ['user-quit-reason'],
    () => userService.getUserQuitReasonList(),
    {
      select: (data) =>
        data.map((item) => ({
          label: item.label,
          value: item.id,
          desc_required: item.id === 6 ? true : false,
        })),
    }
  )
  const { mutate } = useMutation(userService.quitUser, {
    onSuccess: () => {
      Router.push('/logout')
    },
    onError: (error) => {
      window.alert(error)
    },
  })

  const desc_required = watch('reason')?.desc_required

  const onSubmit: SubmitHandler<UserQuitFormData> = (data) => {
    mutate(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <A11yElement as="h1">회원탈퇴</A11yElement>
      <ContentLayout>
        <InfoContainer>
          <Account>
            <NoPaddingBottomInputWithLabel
              labelName="연동계정"
              renderInput={() => (
                <>
                  <AccountInfo>
                    <Image
                      src="/images/google-4color.svg"
                      width={24}
                      height={24}
                      alt="구글 아이콘"
                    />
                    example@example.com
                  </AccountInfo>
                  <input
                    {...register('account', { required: '탈퇴계정이 필요합니다' })}
                    type="hidden"
                    value="example@example.com"
                  />
                </>
              )}
            />
          </Account>
          <QuitWarningLink
            href="https://www.naver.com"
            target="_blank"
            rel="noopener noreferer nofollow"
          >
            탈퇴 전 유의사항
          </QuitWarningLink>
        </InfoContainer>
        <DemonstrationContainer>
          <Reason>
            <InputWithLabel
              labelName="탈퇴하려는 이유가 무엇인가요?"
              renderInput={(id, isError) => (
                <Controller
                  name="reason"
                  control={control}
                  rules={{ required: '사유를 선택해주세요.' }}
                  render={({ field }) => (
                    <LightSelectWithNoBorderGradient
                      {...field}
                      id={id}
                      options={reasonOptions}
                      placeholder="선택해주세요"
                    />
                  )}
                />
              )}
              errorMessage={errors.reason?.message}
            />
          </Reason>
          <Description>
            <InputWithLabel
              labelName={`서비스 이용중 불편한 점을 알려주시면 서비스 개선에 도움이 됩니다.(${
                desc_required ? '필수' : '선택'
              })`}
              renderInput={(id, isError) => (
                <StyledBoxedTextArea
                  id={id}
                  {...register('description', {
                    required: desc_required && '불편한 점을 작성해주세요.',
                  })}
                  placeholder="내용을 작성해주세요."
                />
              )}
              errorMessage={errors.description?.message}
            />
          </Description>
        </DemonstrationContainer>
        <div>
          <AgreementLabel agreed={agreed}>
            <Checkbox
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              small
              // darker
            />
            탈퇴 전 유의사항을 모두 확인하였고, 이에 동의합니다.
          </AgreementLabel>
        </div>
        <Action>
          <SubmitButton type="submit" disabled={!agreed}>
            탈퇴하기
          </SubmitButton>
        </Action>
      </ContentLayout>
    </Form>
  )
}
export default Quit

const Form = styled.form`
  height: 100%;
`

const ContentLayout = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: auto auto auto 1fr;
`

const InfoContainer = styled(GridContainer)`
  position: relative;
  margin: 4px 0;
  background: ${({ theme }) => theme.color.G0};
  padding-top: 13px;
  padding-bottom: 13px;
`

const DemonstrationContainer = styled(GridContainer)`
  padding-top: 24px;
  padding-bottom: 5px;
  background: ${({ theme }) => theme.color.G0};
`

const Action = styled(GridContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
`

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 12px 0;
  ${({ theme }) => theme.typo.P200B}
  color: ${({ theme }) => theme.color.G50D};
  background: ${({ theme }) => theme.color.G40};
  border-radius: 4px;

  :disabled {
    ${({ theme }) => theme.typo.P200M}
    color: ${({ theme }) => theme.color.G50};
    background: none;
    border: 1px solid ${({ theme }) => theme.color.G40};
  }
`

const Account = styled.div`
  grid-column: 1 / -1;
`

const QuitWarningLink = styled.a`
  position: absolute;
  top: 13px;
  right: 16px;
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50};
  text-decoration: underline;
`

const NoPaddingBottomInputWithLabel = styled(InputWithLabel)`
  padding-bottom: 0;
`

const AccountInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  ${({ theme }) => theme.typo.PE100}
  color: ${({ theme }) => theme.color.G90};
`

const Reason = styled.div`
  grid-column: 1 / -1;
`

const Description = styled.div`
  grid-column: 1 / -1;
`

const AgreementLabel = styled.label<{ agreed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  ${({ theme }) => theme.typo.P100R}
  color: ${({ agreed, theme }) => (agreed ? theme.color.G60 : theme.color.G50)};

  margin-top: 14px;
`

const StyledBoxedTextArea = styled(BoxedTextArea)`
  height: 110px;
  border-radius: 8px;
  padding: 8px 12px;

  color: ${({ theme }) => theme.color.G100};
  ${({ theme }) => theme.typo.P200R}

  ::placeholder {
    ${({ theme }) => theme.typo.P200R}
    color: ${({ theme }) => theme.color.G50};
  }
`

const LightSelectWithNoBorderGradient = styled(LightSelect)`
  .react-select__control {
    border: 1px solid ${({ theme }) => theme.color.G40} !important;
    background-image: initial !important;
    background-origin: initial !important;
    background-clip: initial !important;

    .react-select__value-container {
      padding: 0 15px !important;
    }
  }
`
