import Image from 'next/image'
import OnboardingConfirmButton from '@/components/ui/buttons/ConfirmButton'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import { v4 as uuidv4 } from 'uuid'
import { userService } from '@/services'
import axios from 'axios'
import { readFileAsync } from '@/utils/basicUtils'
import uploadProfileImage from '@/utils/uploadProfileImage'

const SetProfileImage = observer(() => {
  const router = useRouter()
  const { onboardingStore } = useStore()

  const handleImageSelect: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const fileInput = e.currentTarget
    const file = fileInput.files![0]

    const uploadedUrl = await uploadProfileImage(file)

    if (!uploadedUrl) {
      throw new Error('사진 업로드에 실패했습니다.')
    }
    onboardingStore.selectProfileImageUrl(uploadedUrl)
  }

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = () => {
    router.push('/onboarding/step04')
  }

  return (
    <>
      <StyledGrid>
        <ProfileWrapper>
          <StyledLabel>
            <NextImage
              src={onboardingStore.profileImageUrl ?? '/'}
              width={104}
              height={104}
              alt="프로필 이미지"
            />
            <ProfileText>변경하기</ProfileText>
            <input
              type="file"
              style={{ display: 'none' }}
              accept="image/png, image/jpeg"
              onChange={handleImageSelect}
            />
          </StyledLabel>
        </ProfileWrapper>
      </StyledGrid>
      <OnboardingConfirmButton
        disabled={!onboardingStore.isProfileImageChanged}
        displayText="다음 단계로"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetProfileImage

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 170px;
  place-items: center;
`

const ProfileWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
`

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
  color: ${({ theme }) => theme.color.G30D};
  margin-top: 13px;
`
