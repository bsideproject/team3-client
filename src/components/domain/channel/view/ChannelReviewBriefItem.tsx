import Button from '@/components/ui/buttons/Button'
import UnderlinedTitle from '@/components/ui/titles/UnderlinedHeading'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const ChannelReviewBriefItem = () => {
  return (
    <Article>
      <Header>
        <Profile>
          <Image
            src="/images/examples/review-profile.png"
            width={40}
            height={40}
            alt="프로필사진"
          />
          <ProfileText>
            <WriterName>김수성</WriterName>
            <RegDate>2022-07-01</RegDate>
          </ProfileText>
        </Profile>
        <Details>
          <Rating>
            <Image src="/images/star.svg" width={12} height={12} alt="별" />
            <span>4.5</span>
          </Rating>
          <Keywords>
            <Keyword>슈카월드</Keyword>
            <Keyword>패셔니스타</Keyword>
          </Keywords>
        </Details>
      </Header>
      <Review>
        <div style={{ marginBottom: '18px' }}>
          {/* <Title level="h3" align="center">
            가볍게 다양한 주제의 맥락을 파악할 수 있는 채널
          </Title> */}
          <Paragraph>
            유튜브, 방송 등 대중을 대상으로 하는 업의 핵심 재능은 어려운 이야기를
            쉽게 풀어주는 것이겠죠. 슈카는 이런 면에서 재치있고, 핵심을 관통하는
            주제를 배경스토리부터 시작해서 중심주제로 가는 전략을 구사합니다. 슈카는
            유명해지기 전에도 스스로...
          </Paragraph>
          <DetailButton>자세히 보기</DetailButton>
        </div>
        <Counts>
          <Button>
            <Image
              src="/images/thumbs-up.svg"
              width={16}
              height={16}
              alt="종아요"
              style={{ marginRight: 2 }}
            />
            <Count>100</Count>
          </Button>
          <Link href="/review/view/1111">
            <a>
              <Image
                src="/images/message.svg"
                width={20}
                height={20}
                alt="댓글"
                style={{ marginBottom: -1 }}
              />
              <Count>100</Count>
            </a>
          </Link>
        </Counts>
      </Review>
    </Article>
  )
}
export default ChannelReviewBriefItem

const Article = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  /* height: 331px; */
  background: ${({ theme }) => theme.color.G0};
  border-radius: 12px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 18px 18px 15px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.color.G30};
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`

const WriterName = styled.b`
  ${({ theme }) => theme.typo.P100B}
  color: ${({ theme }) => theme.color.G100};
`

const RegDate = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.color.G50};
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`

const Rating = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.color.G40};
  border-radius: 35px;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: -0.5px;
    line-height: 16px;
    width: 16px;
  }
`

const Keywords = styled.ul`
  display: flex;
  gap: 5px;
`

const Keyword = styled.li`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};

  ::before {
    content: '#';
  }
`

const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 23px 18px 18px 18px;
`

const Title = styled(UnderlinedTitle)`
  ${({ theme }) => theme.typo.H50B}
  color: ${({ theme }) => theme.color.G100};
`

const Paragraph = styled.p`
  /* margin-top: 23px; */
  /* margin-bottom: 5px; */
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G60};
`

const DetailButton = styled(Button)`
  ${({ theme }) => theme.typo.P50M}
  color: ${({ theme }) => theme.color.PP600};
`

const Counts = styled.div`
  display: flex;
  gap: 11px;

  button,
  a {
    display: flex;
    align-items: center;
  }
`

const Count = styled.span`
  ${({ theme }) => theme.typo.PE50}
  color: ${({ theme }) => theme.color.G50D};
`
