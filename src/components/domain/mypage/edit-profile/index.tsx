import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import uploadProfileImage from '@/utils/uploadProfileImage'
import Image from 'next/image'
import { ChangeEventHandler, useState } from 'react'
import styled from 'styled-components'

const EditProfile = () => {
  const [profileImageUrl, setProfileImageUrl] = useState(
    '/images/examples/mypage-profile.png'
  )

  const handleImageSelect: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const fileInput = e.currentTarget
    const file = fileInput.files![0]

    const uploadedUrl = await uploadProfileImage(file)

    if (!uploadedUrl) {
      throw new Error('사진 업로드에 실패했습니다.')
    }

    setProfileImageUrl(uploadedUrl)
  }

  return (
    <StyledGrid>
      <ProfileWrapper>
        <StyledLabel>
          <NextImage
            src={profileImageUrl}
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
  )
}
export default EditProfile

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 24px auto 51px auto 18px auto 40px auto;
`

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
