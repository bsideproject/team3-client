import Button from '@/components/ui/buttons/Button'
import A11yElement from '@/components/ui/titles/A11yElement'
import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import SearchIcon from '@/images/search-mag-glass.svg'
import { useUser } from '@/hooks/queries/user/userQueries'

const Home = () => {
  const user = useUser()

  return (
    <>
      <Header>
        <A11yElement as="h1">우주라이킷</A11yElement>
        <Link href="/">
          <a>
            <Image
              src="/logo-typo.svg"
              width={74}
              height={16}
              alt={`우주라이킷 로고`}
            />
          </a>
        </Link>
        <HeaderRight>
          <Button>
            <Image
              src="/images/search-home.svg"
              width={28}
              height={28}
              alt="돋보기 아이콘"
            />
          </Button>
          <Link href="/mypage">
            <a aria-label="마이페이지">
              <Image
                src={user?.isLoggedIn ? user.pictureUrl : '/images/person-icon.jpg'}
                width={24}
                height={24}
                alt="프로필 사진"
                style={{ borderRadius: '50%' }}
              />
            </a>
          </Link>
        </HeaderRight>
      </Header>

      <main>
        <div
          css={css`
            position: relative;
            background: ${({ theme }) => theme.color.G80D};
            height: 219px;
            overflow: hidden;
          `}
        >
          <div
            css={css`
              position: absolute;
              left: 101px;
              bottom: 31px;
              width: 289px;
              height: 259px;
            `}
          >
            <Image src="/logo-image.svg" layout="fill" alt="배경속 로고이미지" />
          </div>
          <p
            css={css`
              position: absolute;
              left: 22px;
              bottom: 18px;
              color: #fff;
              font-family: 'Noto Sans KR', sans-serif;
              font-weight: 400;
              font-size: 18px;
              line-height: 28px;
              letter-spacing: -0.5px;
            `}
          >
            우주라이킷을 탐험하며
            <br />
            흥미로운 유튜브 채널을 발견해보세요.
          </p>
        </div>
      </main>
    </>
  )
}
export default Home

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 31px 16px 17px 15px;
`

const HeaderRight = styled.div`
  display: flex;
  gap: 6px;
`
