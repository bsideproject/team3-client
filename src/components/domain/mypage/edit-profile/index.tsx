import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import { inheritGrid } from '@/styles/mixins'
import uploadProfileImage from '@/utils/uploadProfileImage'
import Image from 'next/image'
import { ChangeEventHandler, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styled, { css } from 'styled-components'
import * as yup from 'yup'
import InputWithLabel from '@/components/ui/inputs/InputWithLabel'
import LightSelect from '@/components/ui/inputs/LightSelect'
import getBirthYearOptions from '@/utils/getBirthYearOptions'
import RoundedInput from '@/components/ui/inputs/RoundedInput'
import { userService } from '@/services'
import Button from '@/components/ui/buttons/Button'
import { useMutation, useQuery } from '@tanstack/react-query'
import { mypageUserInfoQueryKey } from '@/constants/query-keys'
import Router from 'next/router'

const birthYearOptions = getBirthYearOptions()

const genderOptions: Array<{
  label: string
  value: 'M' | 'F'
}> = [
  { label: '여자', value: 'F' },
  { label: '남자', value: 'M' },
]

const schema = yup.object({
  profileImageUrl: yup
    .string()
    .url('이미지 Url을 입력해주십시오.')
    .required('이미지가 선택되지 않았습니다.'),
  nickname: yup
    .string()
    .min(3, '최소 3자이상 입력해주세요.')
    .max(20, '글자수를 초과했습니다')
    .required('수정할 닉네임을 입력해주십시오.'),
  gender: yup
    .object({
      label: yup.string().required(),
      value: yup.mixed<'M' | 'F'>().required(),
    })
    .required('성별을 선택해주십시오.'), // 리팩토링 필요
  // .oneOf(genderOptions, '정확한 성별값을 입력해주십시오(M, F).')

  birthYear: yup
    .object({ label: yup.number().required(), value: yup.number().required() })
    // .oneOf(birthYearOptions, '올바른 생년을 입력해주세요.')
    .required('생년을 선택해주십시오.'),
})

type EditFormData = yup.InferType<typeof schema>

const EditProfile = () => {
  const { data } = useQuery(mypageUserInfoQueryKey(), userService.getMypageUserInfo)
  const { mutate } = useMutation(userService.editUser, {
    onSuccess: (data) => {
      Router.push('/mypage')
    },
    onError: (error) => {
      alert(error)
    },
  })

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<EditFormData>({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   profileImageUrl:
    //     'http://www.searchitfree.tk:3000/images/examples/mypage-profile.png',
    //   nickname: '우주대탐험',
    //   gender: genderOptions[0],
    //   birthYear: birthYearOptions[0],
    // },
  })

  const watchProfileImage = watch('profileImageUrl')

  const handleImageSelect: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const fileInput = e.currentTarget
    const file = fileInput.files![0]
    if (!file) return

    const uploadedUrl = await uploadProfileImage(file)

    if (!uploadedUrl) {
      throw new Error('사진 업로드에 실패했습니다.')
    }

    setValue('profileImageUrl', uploadedUrl)
  }

  const onSubmit: SubmitHandler<EditFormData> = (data) => {
    mutate({
      profileImageUrl: data.profileImageUrl,
      nickname: data.nickname,
      gender: data.gender.value,
      birthYear: data.birthYear.value,
    })
  }

  useEffect(() => {
    if (data) {
      reset({
        profileImageUrl: data.profileImageUrl,
        nickname: data.nickname,
        gender: genderOptions.find((option) => option.value === data.gender),
        birthYear: birthYearOptions.find(
          (option) => option.value === data.birthYear
        ),
      })
    }
  }, [data, reset])

  return (
    <GridContainer>
      <Form id="edit-profile" onSubmit={handleSubmit(onSubmit)}>
        <ProfileWrapper>
          <StyledLabel>
            <input type="hidden" {...register('profileImageUrl')} />
            {watchProfileImage && (
              <NextImage
                src={watchProfileImage}
                width={104}
                height={104}
                alt="프로필 이미지"
              />
            )}
            <ProfileText>변경하기</ProfileText>
            <input
              type="file"
              style={{ display: 'none' }}
              accept="image/png, image/jpeg"
              onChange={handleImageSelect}
            />
          </StyledLabel>
        </ProfileWrapper>

        <Nickname>
          <InputWithLabel
            labelName="닉네임"
            renderInput={(id, isError) => (
              <Controller
                name="nickname"
                control={control}
                render={({ field }) => (
                  <InitialNotActiveInput
                    {...field}
                    id={id}
                    isError={isError}
                    maxCount={20}
                    isDirty={!!dirtyFields.nickname}
                  />
                )}
              />
            )}
            infoMessage="3자에서 20자이내로 입력해주세요."
            errorMessage={errors.nickname?.message}
          />
        </Nickname>

        <Gender>
          <InputWithLabel
            labelName="성별"
            renderInput={(id, isError) => (
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <InitialNotActiveSelect
                    {...field}
                    id={id}
                    options={genderOptions}
                    isDirty={!!dirtyFields.gender}
                    activeNotBold
                  />
                )}
              />
            )}
            errorMessage={errors.gender?.message}
          />
        </Gender>

        <Age>
          <InputWithLabel
            labelName="연령"
            renderInput={(id, isError) => (
              <Controller
                name="birthYear"
                control={control}
                render={({ field }) => (
                  <InitialNotActiveSelect
                    {...field}
                    id={id}
                    options={birthYearOptions}
                    isDirty={!!dirtyFields.birthYear}
                    activeNotBold
                  />
                )}
              />
            )}
            errorMessage={errors.birthYear?.message}
          />
        </Age>

        <Account>
          <InputWithLabel
            labelName="연동계정"
            renderInput={(id, isError) => (
              <AccountInfo>
                <Image
                  src="/images/google-4color.svg"
                  width={24}
                  height={24}
                  alt="구글 아이콘"
                />
                example@example.com
              </AccountInfo>
            )}
            // errorMessage={errors.birthYear?.mesage}
          />
        </Account>
      </Form>
    </GridContainer>
  )
}
export default EditProfile

const ProfileWrapper = styled.div``

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const NextImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`

const ProfileText = styled.span`
  ${({ theme }) => theme.typo.P100R};
  color: ${({ theme }) => theme.color.G50};
  margin-top: 4px;
`

const AccountInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  ${({ theme }) => theme.typo.PE100}
  color: ${({ theme }) => theme.color.G90};
`

// Section
const Nickname = styled.div``

const Gender = styled.div``

const Age = styled.div``

const Account = styled.div``

const Form = styled.form`
  grid-column: 1 / -1;
  ${inheritGrid}
  grid-template-rows: 24px auto 51px auto 20px auto 20px auto 8px auto;

  ${ProfileWrapper} {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }

  ${Nickname} {
    grid-row: 4 / 5;
    grid-column: 1 / -1;
  }

  ${Gender} {
    grid-row: 6 / 7;
    grid-column: 1 / -1;
  }

  ${Age} {
    grid-row: 8 / 9;
    grid-column: 1 / -1;
  }

  ${Account} {
    grid-row: 10 / 11;
    grid-column: 1 / -1;
  }
`

// Dirty판별 커스텀 CSS
const InitialNotActiveInput = styled(RoundedInput)<{ isDirty?: boolean }>`
  input {
    ${({ isDirty, theme }) =>
      !isDirty &&
      css`
        border: 1px solid ${theme.color.G40} !important;
        background-image: initial !important;
        background-origin: initial !important;
        background-clip: initial !important;
      `};
  }
`

const InitialNotActiveSelect = styled(LightSelect)<{ isDirty?: boolean }>`
  .react-select__control {
    ${({ isDirty, theme }) =>
      !isDirty &&
      css`
        border: 1px solid ${theme.color.G40} !important;
        background-image: initial !important;
        background-origin: initial !important;
        background-clip: initial !important;

        .react-select__value-container {
          padding: 0 14px !important;
        }
      `};
  }
`
