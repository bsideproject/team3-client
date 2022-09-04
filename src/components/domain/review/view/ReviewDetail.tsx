import { ReviewDetailInfo } from '@/types/reviewTypes'

type Props = {
  reviewInfo: ReviewDetailInfo
}

import Button from '@/components/ui/buttons/Button'
import UnderlinedTitle from '@/components/ui/titles/UnderlinedTitle'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { a11yHidden } from '@/styles/mixins'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import Comments from './Comments'

const ReviewDetail = ({ reviewInfo }: Props) => {
  return (
    <StyledGrid>
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
            <RegDatetime dateTime="2022-07-01">2022-07-01</RegDatetime>
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
      <MainReview>
        <Title level="h1" align="center">
          <A11yTitle>미야옹철의 냥냥펀치 리뷰 - </A11yTitle>가볍게 다양한 주제의
          맥락을 파악할 수 있는 채널
        </Title>
        {/* 퀵리뷰 없으면 아래 마크업으로 대체 */}
        {/* <A11yTitle as="h1">
            미야옹철의 냥냥펀치 리뷰 - 유튜브, 방송 등 대중을 대상으로 하는 업의 핵심
            재능은 어려운 이야기를 쉽게 풀어주는 것이겠죠
          </A11yTitle> */}
        <Paragraph>
          유튜브, 방송 등 대중을 대상으로 하는 업의 핵심 재능은 어려운 이야기를 쉽게
          풀어주는 것이겠죠
          <br />
          <br />
          슈카는 이런 면에서 재치있고, 핵심을 관통하는 주제를 배경스토리부터 시작해서
          중심주제로 가는 전략을 구사합니다.
          <br />
          <br />
          슈카는 유명해지기 전에도 스스로 엔터테이너임을 자처했습니다.
          <br />
          <br />
          그러나 듣다 보면 걸리는 점이 있기 마련이죠. 이 비중이 심하지 않아야 엔터로
          편하게 듣을 수 있는 것인데, 방송출연 등의 이유 때문인지 근래 잘못된
          정보라던지 부실한 논리 전개가 조금 심해지고 있었는데요.
          <br />
          <br />
          금일자로 조금 회복했네요. 이유는 단순합니다. 들인 시간과 정성 차이일 뿐.
          <br />
          <br />
          제가 즐겨듣는 이유는 제 관심사인IT기업과 역사 때문인데, 이쪽은 여전히
          괜찮네요.
        </Paragraph>
      </MainReview>
      <KeywordsSection>
        <A11yTitle as="h2">키워드</A11yTitle>
        <Keywords lighter>
          <Keyword>슈카월드</Keyword>
          <Keyword>패셔니스타</Keyword>
        </Keywords>
      </KeywordsSection>
      <CountsSection>
        <A11yTitle as="h2">좋아요, 댓글수</A11yTitle>
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
          <a href="#comments">
            <Image
              src="/images/message.svg"
              width={20}
              height={20}
              alt="댓글"
              style={{ marginBottom: -1 }}
            />
            <Count>100</Count>
          </a>
        </Counts>
      </CountsSection>
      <CommentsSection id="comments">
        <A11yTitle as="h2">댓글</A11yTitle>

        <Comments />
      </CommentsSection>
    </StyledGrid>
  )
}
export default ReviewDetail

const Header = styled.header`
  display: flex;
  justify-content: space-between;
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

const RegDatetime = styled.time`
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

const Keyword = styled.li`
  ${({ theme }) => theme.typo.P50R}

  ::before {
    content: '#';
  }
`

const Keywords = styled.ul<{ lighter?: boolean }>`
  display: flex;
  gap: 5px;

  ${Keyword} {
    color: ${({ lighter, theme }) => (lighter ? theme.color.G40D : theme.color.G60)};
  }
`

const Review = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled(UnderlinedTitle)`
  ${({ theme }) => theme.typo.H50B}
  color: ${({ theme }) => theme.color.G100};
  margin-top: 23px;
`

const A11yTitle = styled.span`
  ${a11yHidden}
`

const Paragraph = styled.p`
  margin-top: 23px;
  /* margin-bottom: 5px; */
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G60};
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

const StyledGrid = styled(GridContainer)`
  ${Header} {
    grid-column: 1 / -1;
  }

  ${Review} {
    grid-column: 1 / -1;
  }
`

const MainReview = styled.div`
  grid-column: 1 / -1;
`

const KeywordsSection = styled.section`
  grid-column: 1 / -1;
  margin-top: 16px;
`

const CountsSection = styled.section`
  grid-column: 1 / -1;
  margin-top: 16px;
`

const CommentsSection = styled.section`
  grid-column: 1 / -1;
  margin-top: 20px;
`
