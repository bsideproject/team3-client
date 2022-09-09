import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const EtcMenu = () => {
  return (
    <>
      <Link href="#">
        <Menu as="a">
          <Text>카테고리 관리</Text>
          <ImageWrapper>
            <Image
              src="/images/chevron-right.svg"
              width={24}
              height={24}
              alt="오른쪽 방향 셰브론"
              style={{ marginRight: '-8px' }}
            />
          </ImageWrapper>
        </Menu>
      </Link>
      <Link href="#">
        <Menu as="a">
          <Text>공지사항</Text>
          <ImageWrapper>
            <Image
              src="/images/chevron-right.svg"
              width={24}
              height={24}
              alt="오른쪽 방향 셰브론"
              style={{ marginRight: '-8px' }}
            />
          </ImageWrapper>
        </Menu>
      </Link>
      <Link href="#">
        <Menu as="a">
          <Text>이용약관</Text>
          <ImageWrapper>
            <Image
              src="/images/chevron-right.svg"
              width={24}
              height={24}
              alt="오른쪽 방향 셰브론"
              style={{ marginRight: '-8px' }}
            />
          </ImageWrapper>
        </Menu>
      </Link>
      <Link href="#">
        <Menu as="a">
          <Text>개인정보 처리 방침</Text>
          <ImageWrapper>
            <Image
              src="/images/chevron-right.svg"
              width={24}
              height={24}
              alt="오른쪽 방향 셰브론"
              style={{ marginRight: '-8px' }}
            />
          </ImageWrapper>
        </Menu>
      </Link>
      <GridContainer>
        <Link href="/api/auth/logout">
          <LogoutAnchor>로그아웃</LogoutAnchor>
        </Link>
      </GridContainer>
    </>
  )
}
export default EtcMenu

const Menu = styled(GridContainer)`
  cursor: pointer;
  background: ${({ theme }) => theme.color.G0};
  border-top: 0.5px solid ${({ theme }) => theme.color.G40};
`

const Text = styled.span`
  grid-column: 1 / 4;
  padding: 17px 0;
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G90};
`

const ImageWrapper = styled.div`
  grid-column: 4 / 5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const LogoutAnchor = styled.a`
  grid-column: 1 / -1;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.G40};
  border-radius: 4px;
  ${({ theme }) => theme.typo.P200M}
  color: ${({ theme }) => theme.color.G50};
  padding: 12px 0;
  text-align: center;
  margin-top: 24px;
`
