import OnboardingConfirmButton from '@/components/ui/buttons/ConfirmButton'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
  WheelEventHandler,
} from 'react'
import { useCategoriesQuery } from '@/hooks/queryHooks'
import { isError } from '@/utils/basicUtils'
import { ContentContainer } from '@/components/layout/container-layout/ContentContainer'
import styled, { keyframes } from 'styled-components'
import LabeledCheckbox from '@/components/ui/inputs/LabeledCheckbox'
import Image from 'next/image'
import Router from 'next/router'

const SetCategory = observer(() => {
  const { onboardingStore } = useStore()

  //  나중에 컴포넌트로 따로 빼서 Suspense Errorboundary 적용하기
  const { isLoading, error, data: categories } = useCategoriesQuery()

  const [isScrollEnd, setIsScrollEnd] = useState(false)

  useEffect(() => {
    const scrollEventHandler = () => {
      const documentElement = document.documentElement

      const extra = 100

      const bottom =
        documentElement.scrollHeight - documentElement.scrollTop <
        documentElement.clientHeight + extra
      if (bottom) {
        setIsScrollEnd(true)
      } else {
        setIsScrollEnd(false)
      }
    }

    window.addEventListener('scroll', scrollEventHandler)

    return () => window.removeEventListener('scroll', scrollEventHandler)
  }, [onboardingStore])

  const handleCategoryChange: MouseEventHandler<HTMLInputElement> = (e) => {
    const checkbox = e.currentTarget

    if (checkbox.checked) {
      onboardingStore.addCategory(checkbox.value)
    } else {
      onboardingStore.removeCategory(checkbox.value)
    }
  }

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await onboardingStore.submit()
      Router.push('/')
    } catch (error) {
      window.alert('회원가입을 할 수 없습니다.')
      Router.push('/')
    }
  }

  const handleScroll: WheelEventHandler<HTMLDivElement> = (e) => {
    const container = e.currentTarget
  }

  const confirmActivated = onboardingStore.categories.length >= 3

  if (isLoading) return <div>Loading...</div>

  if (error && isError(error))
    return <div>{'An error has occurred: ' + error.message}</div>

  return (
    <>
      <StyledContainer onScroll={handleScroll}>
        {categories!.map((category) => (
          <LabeledCheckbox
            key={category}
            text={category}
            name="category"
            value={category}
            checked={onboardingStore.categories.indexOf(category) > -1}
            onChange={handleCategoryChange}
          />
        ))}
      </StyledContainer>
      <ScrollPrompterWrapper style={{ display: isScrollEnd ? 'none' : 'flex' }}>
        <ScrollPrompter>
          <span>SCROLL</span>
          <ImageWrapper>
            <Image
              loading="eager"
              src="/images/chevron_bottom.svg"
              width={16}
              height={16}
              alt="아래를 가리키는 V형 무늬"
            />
          </ImageWrapper>
        </ScrollPrompter>
      </ScrollPrompterWrapper>
      <OnboardingConfirmButton
        disabled={!confirmActivated}
        backgroundGradient={true}
        displayText="나만의 행성찾기"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetCategory

const StyledContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 16px;
`

const ScrollPrompterWrapper = styled.div`
  position: fixed;
  bottom: 76px;
  left: 0;
  right: 0;
  height: 110px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.color.background} 0%,
    ${({ theme }) => theme.color.background} 30%,
    rgba(0, 0, 0, 0) 100%
  );

  // 현재 태마 없음.
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
`

const Falling = keyframes`
  from {
    top: 0;
  }

  to {
    top: 10px;
  }
`

const ImageWrapper = styled.div``

const ScrollPrompter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 13px;

  span {
    margin-bottom: -4px;
  }
  ${ImageWrapper} {
    position: relative;
    animation: ${Falling} 1s infinite linear;
  }
`
