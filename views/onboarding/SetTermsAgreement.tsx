import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import OnboardingConfirmButton, {
  confirmButtonHeight,
} from '@/components/ui/buttons/ConfirmButton'
import Checkbox from '@/components/ui/inputs/Checkbox'
import { useStore } from '@/hooks/storeHooks'
import { TermsAgreement } from '@/stores/OnboardingStore'
import { viewportHeight } from '@/styles/mixins'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { MouseEventHandler, useCallback, useRef, useState } from 'react'
import styled from 'styled-components'

const SetTermsAgreement = observer(() => {
  const router = useRouter()
  const { onboardingStore } = useStore()

  const [agreementQueue, setAgreementQueue] = useState<TermsAgreement[]>([])

  const allChecked = onboardingStore.termsAgreements.every((term) => term.checked)

  const headerTitle =
    agreementQueue.length > 0 ? agreementQueue[0].title : '약관동의'

  const handleAgreeButtonClicked = () => {
    onboardingStore.setAgreementChecked(agreementQueue[0].id, true)
    setAgreementQueue(agreementQueue.slice(1))
  }

  const handleCheckboxChanged: MouseEventHandler<HTMLInputElement> = (e) => {
    const checkbox = e.currentTarget
    const termId = checkbox.dataset.termId!

    if (checkbox.checked) {
      if (termId === 'all') {
        setAgreementQueue(
          onboardingStore.termsAgreements.filter((term) => !term.checked)
        )
      } else {
        const selectedTerm = onboardingStore.termsAgreements.find(
          (term) => term.id === termId
        )

        if (!selectedTerm) {
          throw new Error('해당 id의 약관이 존재하지 않습니다')
        }

        setAgreementQueue([selectedTerm])
      }
    } else {
      if (termId === 'all') {
        onboardingStore.unCheckAllTerms()
      } else {
        onboardingStore.setAgreementChecked(termId, false)
      }
    }
  }

  const handleConfirm = () => {
    router.push('/onboarding/step02')
  }

  return (
    <>
      <StyledHeader>{headerTitle}</StyledHeader>
      <StyledMain>
        {agreementQueue.length > 0 ? (
          <TermsAgreementContent>
            <TermsAgreementContentInner>
              {agreementQueue[0].content}
            </TermsAgreementContentInner>
            <OnboardingConfirmButton
              disabled={false}
              displayText="동의하기"
              style={{ display: 'relative', zIndex: 999 }}
              onClick={handleAgreeButtonClicked}
            />
          </TermsAgreementContent>
        ) : (
          <GridContainer>
            <CheckAllInputWrapper>
              <Checkbox
                data-term-id="all"
                checked={allChecked}
                onChange={handleCheckboxChanged}
              />
              <InputLabel>모든 약관에 동의합니다.</InputLabel>
            </CheckAllInputWrapper>
            {onboardingStore.termsAgreements.map((term) => (
              <InputWrapper key={term.id}>
                <Checkbox
                  data-term-id={term.id}
                  checked={term.checked}
                  onChange={handleCheckboxChanged}
                />
                <InputLabel>
                  <Required>(필수)</Required>
                  {term.title} 동의
                </InputLabel>
              </InputWrapper>
            ))}
          </GridContainer>
        )}
      </StyledMain>
      <OnboardingConfirmButton
        disabled={!allChecked}
        displayText="시작하기"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetTermsAgreement

const headerHeight = 85

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${headerHeight}px;
  ${({ theme }) => theme.typo.P100R}
`

const StyledMain = styled.main`
  ${viewportHeight}
  padding-top: ${headerHeight}px;
  padding-bottom: ${confirmButtonHeight}px;
`

const InputWrapper = styled.label`
  grid-column: 1 / -1;
  ${({ theme }) => theme.typo.P100R}
  margin-bottom: 14px;
  display: flex;
  align-items: center;
`

const CheckAllInputWrapper = styled(InputWrapper)`
  ${({ theme }) => theme.typo.P200R}
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.21);
  margin-bottom: 16px;
  margin-top: 27px;
`

const InputLabel = styled.span`
  display: inline-block;
  height: 18px;
  line-height: 18px;
  margin-left: 8px;
`

const Required = styled.span`
  color: ${({ theme }) => theme.color.PB600};
  margin-right: 2px;
`

const TermsAgreementContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const TermsAgreementContentInner = styled.div`
  position: absolute;
  top: 0;
  left: 35px;
  right: 35px;
  bottom: 35px;
  background: ${({ theme }) => theme.color.G80D};
  border-radius: 12px;

  // 임시코드
  padding: 20px;
  ${({ theme }) => theme.typo.P100R}
`
