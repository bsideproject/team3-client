import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const MainMenu = () => {
  return (
    <StyledGrid>
      <Link href="/mypage/bookmarks">
        <Anchor>
          <Image
            src="/images/bookmark-thin.svg"
            width={32}
            height={32}
            alt="커팅리본"
          />
          찜한 채널
        </Anchor>
      </Link>
      <Divider aria-hidden="true" />
      <Link href="/mypage/reviews">
        <Anchor>
          <Image
            src="/images/message-thin.svg"
            width={32}
            height={32}
            alt="대화풍선"
          />
          리뷰 관리
        </Anchor>
      </Link>
    </StyledGrid>
  )
}
export default MainMenu

const StyledGrid = styled(GridContainer)`
  position: relative;
  background: ${({ theme }) => theme.color.G0};
  padding: 24px 0 20px 0;
`

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G90};
  cursor: pointer;

  :nth-of-type(1) {
    grid-column: 1 / 3;
  }
  :nth-of-type(2) {
    grid-column: 3 / 5;
  }
`

const Divider = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 24px;
  background: ${({ theme }) => theme.color.G40};
`
