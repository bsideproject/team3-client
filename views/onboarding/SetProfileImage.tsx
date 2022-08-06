import Image from 'next/image'
import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { MouseEventHandler, useCallback, useEffect } from 'react'
import styled from 'styled-components'

const SetProfileImage = observer(() => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setProgressTitle([
      `${onboardingStore.nickname}님,`,
      '프로필사진을 변경해주세요!',
    ])
  }, [onboardingStore])

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    onboardingStore.setCurrentProgress(3)
  }, [onboardingStore])

  return (
    <>
      <ProfileWrapper>
        <NextImage
          src="/images/doolys-welcome.png"
          width={104}
          height={104}
          alt="rocket"
        />
        <ProfileText>변경하기</ProfileText>
      </ProfileWrapper>
      <OnboardingConfirmButton
        disabled={false}
        isFinal={false}
        displayText="다음 단계로"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetProfileImage

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 134px;
  margin-top: 60px;
`

const NextImage = styled(Image)`
  border-radius: 50%;
`

const ProfileText = styled.span`
  ${({ theme }) => theme.typo.P100R};
  color: ${({ theme }) => theme.color.G20D};
  margin-top: 17px;
`
