import Grid from '@/components/layout/grid-layout/Grid'
import {
  OnboardingConfirmButton,
  onboardingConfirmButtonHeight,
} from '@/components/ui/buttons'
import Checkbox from '@/components/ui/checkboxes/Checkbox'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { useRef, useState } from 'react'
import styled from 'styled-components'

type Term = {
  title: string
  content: string
}

const terms: Term[] = [
  {
    title: '서비스 이용약관',
    content: '',
  },
  { title: '개인정보처리방침', content: '' },
]

const SetTermsAgreement = observer(() => {
  const { onboardingStore } = useStore()

  const [headerTitle, setHeaderTitle] = useState('약관동의')

  const termQueue = useRef<{ title: string }[]>([])

  const allChecked = onboardingStore.termsAgreementCheckedArr.every(
    (termChecked) => termChecked
  )

  return (
    <>
      <StyledHeader>{headerTitle}</StyledHeader>
      <StyledMain>
        <Grid>
          <CheckAllInputWrapper>
            <Checkbox id="all" checked={allChecked} />
            <label htmlFor="all">모든 약관에 동의합니다.</label>
          </CheckAllInputWrapper>
          <InputWrapper>
            <Checkbox
              id="service"
              checked={onboardingStore.termsAgreementCheckedArr[0]}
            />
            <label htmlFor="service">
              <Required>(필수)</Required>서비스 이용약관 동의
            </label>
          </InputWrapper>
          <InputWrapper>
            <Checkbox
              id="privacy"
              checked={onboardingStore.termsAgreementCheckedArr[1]}
            />
            <label htmlFor="privacy">
              <Required>(필수)</Required>개인정보 처리방침 동의
            </label>
          </InputWrapper>
        </Grid>
      </StyledMain>
      <OnboardingConfirmButton
        disabled={true}
        isFinal={false}
        displayText="동의하기"
      />
    </>
  )
})
export default SetTermsAgreement

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  ${({ theme }) => theme.typo.P100R}
`

const StyledMain = styled.main`
  padding-bottom: ${onboardingConfirmButtonHeight}px;
`

const InputWrapper = styled.div`
  grid-column: 1 / -1;
  ${({ theme }) => theme.typo.P100R}
  margin-bottom: 14px;
`

const CheckAllInputWrapper = styled(InputWrapper)`
  ${({ theme }) => theme.typo.P200R}
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.21);
  margin-bottom: 16px;
  margin-top: 27px;

  display: flex;
  align-items: center;
  line-height: 18px;
`

const Required = styled.span`
  color: ${({ theme }) => theme.color.PB600};
  margin-right: 2px;
`
