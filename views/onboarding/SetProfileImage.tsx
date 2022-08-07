import Image from 'next/image'
import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import { v4 as uuidv4 } from 'uuid'
import service from '@/services/service'
import axios from 'axios'
import { readFileAsync } from '@/utils/basicUtils'

const SetProfileImage = observer(() => {
  const router = useRouter()
  const { onboardingStore } = useStore()
  const [isImageChanged, setIsImageChanged] = useState(false)

  const handleImageSelect: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.currentTarget.files![0]
    const fileName = file.name
    const fileType = file.type
    const extension = fileName.split('.').pop()

    const uniqueFileName = `${uuidv4()}.${extension}`

    const uploadUrl = await service.onboardingService.getProfileImageUploadUrl(
      uniqueFileName,
      fileType
    )

    // // 굳이 바이트스트림으로 변환 안해줘도 파일객체 보내면 axios가 알아서 변환해줌
    // const fileStream = await readFileAsync(file)

    await axios.put(uploadUrl, file, {
      headers: {
        // 헤더에 명시해야 signiture 에러 나지 않음.
        'Content-Type': fileType,
        // URL에 있더라도 header에도 x-amz-acl 설정해줘야 signiture 에러 안남.
        // https://aboutweb.dev/blog/signaturedoesnotmatch-s3-direct-upload/
        'x-amz-acl': 'public-read',
      },
    })

    const uploadedUrl = `https://kr.object.ncloudstorage.com/${process.env.NEXT_PUBLIC_STORAGE_BUCKET}/profile/${uniqueFileName}`
    onboardingStore.setProfileImageUrl(uploadedUrl)
    setIsImageChanged(true)
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
        disabled={!isImageChanged}
        isFinal={false}
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
`

const ProfileText = styled.span`
  ${({ theme }) => theme.typo.P100R};
  color: ${({ theme }) => theme.color.G30D};
  margin-top: 13px;
`
