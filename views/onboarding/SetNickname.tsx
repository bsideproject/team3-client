import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import OnboardingConfirmButton from '@/components/ui/buttons/ConfirmButton'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'

const SetNickname = observer(() => {
  const router = useRouter()
  const { onboardingStore } = useStore()

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      let value = e.currentTarget.value
      value = value.replace(/[^0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣!#*_-]/g, '')
      value = value.slice(0, 20)
      onboardingStore.setNickname(value)
    },
    [onboardingStore]
  )

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    router.push('/onboarding/step03')
  }, [router])

  const confirmActivated = onboardingStore.nickname.length >= 3

  return (
    <>
      <StyledGrid>
        <InputWrapper>
          <NicknameInput
            placeholder="사용할 닉네임을 입력해주세요"
            onChange={handleInputChange}
            value={onboardingStore.nickname}
          />
          <WordCount>{onboardingStore.nickNameWordCount} / 20</WordCount>
        </InputWrapper>
      </StyledGrid>
      <OnboardingConfirmButton
        disabled={!confirmActivated}
        displayText="다음 단계로"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetNickname

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 142px 1fr;
  place-items: end center;
  height: 100%;
`

const InputWrapper = styled.div`
  grid-column: 1 / -1;
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
