import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import { mypageUserInfoQueryKey } from '@/constants/query-keys'
import { userService } from '@/services'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Profile = () => {
  const { data } = useQuery(mypageUserInfoQueryKey(), userService.getMypageUserInfo)

  return (
    <StyledGrid>
      <Wrapper>
        <ProfileInfo>
          {data && (
            <Image
              src={data.profileImageUrl as string}
              width={46}
              height={46}
              alt={`유저 프로필사진`}
              style={{ borderRadius: '50%' }}
            />
          )}
          <Nickname>{data?.nickname}</Nickname>
        </ProfileInfo>

        <Link href="/mypage/edit-profile">
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
