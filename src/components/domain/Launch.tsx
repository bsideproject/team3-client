import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import { resetButton } from '@/styles/mixins'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Launch = () => {
  return (
    <StyledGrid>
      <Ball />
      <Title>서치잇</Title>
      <SignupButton as="a" href="/api/auth/google">
        <Image
          src="/images/google_logo.svg"
          width={26}
          height={26}
          alt="구글 로고"
        />
        구글로 시작하기
      </SignupButton>
      <LoginPrompt>
        이미 가입을 했다면?{' '}
        <Link href="/api/auth/google">
          <a>로그인</a>
        </Link>
      </LoginPrompt>
      <Info>
        계정 등록 시 서치잇의{' '}
        <Link href="/">
          <a>이용 약관</a>
        </Link>
        에 동의하며 서치잇의{' '}
        <Link href="/">
          <a>개인 정보 처리방침</a>
        </Link>
        을 읽은것으로 간주됩니다.
      </Info>
    </StyledGrid>
  )
}
export default Launch

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 381fr 67fr 219fr 41fr 106fr 30fr;
  place-items: end center;
  height: 100%;
`
const Ball = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  width: 139px;
  height: 138px;
  background: ${({ theme }) => theme.gradient.G100};
  filter: blur(20px);
  border-radius: 50%;
`

const Title = styled.h1`
  ${({ theme }) => theme.typo.H200B}
  grid-column: 1 / 5;
  grid-row: 2 / 3;
`

const SignupButton = styled.button`
  ${resetButton}
  ${({ theme }) => theme.typo.H100B};
  grid-column: 1 / 5;
  grid-row: 3 / 4;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 49px;
  border-radius: 49px;
  background: ${({ theme }) => theme.gradient.G100};
`

const LoginPrompt = styled.p`
  ${({ theme }) => theme.typo.P200R}
  grid-column: 1 / 5;
  grid-row: 4 / 5;
  color: ${({ theme }) => theme.color.G20D};

  a {
    ${({ theme }) => theme.typo.P200B}
  }
`

const Info = styled.p`
  ${({ theme }) => theme.typo.P50R}
  grid-column: 1 / 5;
  grid-row: 5 / 6;
  width: 182px;
  text-align: center;
  color: ${({ theme }) => theme.color.G40D};

  a {
    color: ${({ theme }) => theme.color.G50D};
  }
`
