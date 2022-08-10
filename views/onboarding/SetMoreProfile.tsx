import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import OnboardingConfirmButton from '@/components/ui/buttons/ConfirmButton'
import LabeledRadio from '@/components/ui/inputs/LabeledRadio'
import Select from '@/components/ui/inputs/Select'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { ChangeEventHandler, MouseEventHandler, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserView, MobileView } from 'react-device-detect'

const currentYear = new Date().getFullYear()
const baseYear = 1900

const birthYearOptions = Array.from(Array(currentYear - baseYear + 1).keys())
  .map((idx) => idx + baseYear)
  .sort((a, b) => (a < b ? 1 : -1))
  .map((year) => ({
    value: year as number,
    label: year as number,
  }))

const SetMoreProfile = observer(() => {
  const router = useRouter()
  const { onboardingStore } = useStore()

  const handleYearSelect = (selected: any) => {
    const year = selected.value

    onboardingStore.setBirthYear(year)
  }

  const handleSexChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
    const radio = e.currentTarget
    let value = radio.value

    if (['M', 'F'].indexOf(value) === -1) {
      throw new Error(`${value}: 해당 성별 값은 없습니다.`)
    }

    onboardingStore.setSex(value as 'M' | 'F')
  }

  const resetSex: MouseEventHandler<HTMLButtonElement> = () => {
    onboardingStore.resetSex()
  }

  const resetYear: MouseEventHandler<HTMLButtonElement> = () => {
    onboardingStore.resetBirthYear()
  }

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = () => {
    router.push('/onboarding/step05')
  }

  const confirmActivated = onboardingStore.birthYear && onboardingStore.sex

  return (
    <>
      <StyledGrid>
        <InputContainer>
          <InputTitle>성별</InputTitle>
          <SexWrapper>
            {onboardingStore.sex ? (
              <CompletedInput onClick={resetSex}>
                {onboardingStore.sex === 'M' ? (
                  <>
                    <CompletedIcon>🧑‍🚀</CompletedIcon>남성
                  </>
                ) : (
                  <>
                    <CompletedIcon>👩‍🚀</CompletedIcon>여성
                  </>
                )}
              </CompletedInput>
            ) : (
              <>
                <LabeledRadio
                  checked={onboardingStore.sex === 'F'}
                  text={'여성'}
                  value="F"
                  onChange={handleSexChanged}
                />
                <LabeledRadio
                  checked={onboardingStore.sex === 'M'}
                  text={'남성'}
                  value="M"
                  onChange={handleSexChanged}
                />
              </>
            )}
          </SexWrapper>
        </InputContainer>
        <InputContainer>
          <InputTitle>연령</InputTitle>
          {onboardingStore.birthYear ? (
            <CompletedInput onClick={resetYear}>
              <CompletedIcon>👏</CompletedIcon>
              {onboardingStore.birthYear}
            </CompletedInput>
          ) : (
            <StyledSelect
              isSearchable={false}
              placeholder="선택"
              options={birthYearOptions}
              defaultValue={onboardingStore.birthYear}
              onChange={handleYearSelect}
            />
          )}
        </InputContainer>
      </StyledGrid>
      <OnboardingConfirmButton
        disabled={!confirmActivated}
        displayText="다음 단계로"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetMoreProfile

const inputWrapperWidth = 158

const StyledGrid = styled(GridContainer)`
  padding-top: 13px;
`

const InputContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

const InputTitle = styled.h2`
  ${({ theme }) => theme.typo.P200R}
  margin-bottom: 7px;
`

const SexWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: ${inputWrapperWidth}px;
`

const StyledSelect = styled(Select)`
  width: ${inputWrapperWidth}px;
`

const CompletedInput = styled.button`
  display: inline-block;
  padding: 9px 19px;
  border: 1px solid ${({ theme }) => theme.color.G50D};
  border-radius: 74px;
  cursor: pointer;
  background: ${({ theme }) => theme.color.G20D};
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G70D};
`

const CompletedIcon = styled.span`
  margin-right: 8px;
`
