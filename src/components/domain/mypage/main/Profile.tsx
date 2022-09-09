import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Profile = () => {
  return (
    <StyledGrid>
      <Wrapper>
        <ProfileInfo>
          <Image
            src="/images/examples/mypage-profile.png"
            width={46}
            height={46}
            alt={`유저 프로필사진`}
          />
          <Nickname>우주대탐험</Nickname>
        </ProfileInfo>

        <Link href="">
          <a aria-label="회원정보 수정">
            <Image
              src="/images/edit-pencil.svg"
              width={24}
              height={24}
              alt="연필이 줄을 긋는다."
            />
          </a>
        </Link>
      </Wrapper>
    </StyledGrid>
  )
}
export default Profile

const StyledGrid = styled(GridContainer)`
  margin: 3px 0;
  background: ${({ theme }) => theme.color.G0};
`

const Wrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`

const Nickname = styled.span`
  ${({ theme }) => theme.typo.H50B}
  color: ${({ theme }) => theme.color.G90};
  margin-left: 7px;
`
