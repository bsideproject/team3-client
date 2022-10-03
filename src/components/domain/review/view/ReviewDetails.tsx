type Props = {
  reviewSeq: number
}

import Button from '@/components/ui/buttons/Button'
import UnderlinedTitle from '@/components/ui/titles/UnderlinedHeading'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { a11yHidden, borderGradient } from '@/styles/mixins'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import Comments from './Comments'
import { useQuery } from '@tanstack/react-query'
import { reviewService } from '@/services'
import moment from 'moment'

const ReviewDetails = ({ reviewSeq }: Props) => {
  const { data } = useQuery(['review-details', reviewSeq], () =>
    reviewService.getReviewDetails(reviewSeq)
  )

  return (
    <StyledGrid>
      <Header>
        <Profile>
          <Image
            src={data?.user_info.profile_img as string}
            width={40}
            height={40}
            alt="프로필사진"
            style={{ borderRadius: '50%' }}
          />
          <ProfileText>
            <WriterName>{data?.user_info.nickname}</WriterName>
            <RegDatetime dateTime={data?.created_date}>
              {moment(data?.created_date).format('YYYY-MM-DD')}
            </RegDatetime>
          </ProfileText>
        </Profile>
        <Details>
          <Rating>
            <Image src="/images/star.svg" width={12} height={12} alt="별" />
            <span>{data?.star_rating}</span>
          </Rating>
          <Keywords>
            {data?.youtube_channel_tag_list
              .sort((a, b) => a.tag_order - b.tag_order)
              .map((tag) => (
                <Keyword key={tag.id}>{tag.name}</Keyword>
              ))}
          </Keywords>
        </Details>
      </Header>

      <ChannelCard>
        <Image
          src={data?.youtube_channel.thumbnail_url as string}
          width={44}
          height={44}
          style={{ borderRadius: '50%' }}
          alt={`${data?.youtube_channel.title} 채널 이미지`}
        />
        <ChannelTextInfo>
          <ChannelTitle>{data?.youtube_channel.title}</ChannelTitle>
          <ChannelCategories>
            {data?.youtube_channel.youtube_channel_user_category_list && (
              <Category>
                {data?.youtube_channel.youtube_channel_user_category_list.map(
                  (category) => (
                    <span key={category.category_id}>{category.category}</span>
                  )
                )}
              </Category>
            )}
          </ChannelCategories>
        </ChannelTextInfo>
      </ChannelCard>

      <MainReview>
        {/* <Title level="h1" align="center">
          <A11yTitle>미야옹철의 냥냥펀치 리뷰 - </A11yTitle>가볍게 다양한 주제의
          맥락을 파악할 수 있는 채널
        </Title> */}
        {/* 퀵리뷰 없으면 아래 마크업으로 대체 */}
        <A11yTitle as="h1">{data?.youtube_channel.title} 채널 리뷰</A11yTitle>
        <Paragraph>{data?.review_body}</Paragraph>
      </MainReview>
      <KeywordsSection>
        <A11yTitle as="h2">키워드</A11yTitle>
        <Keywords lighter>
          {data?.youtube_channel_tag_list
            .sort((a, b) => a.tag_order - b.tag_order)
            .map((tag) => (
              <Keyword key={tag.id}>{tag.name}</Keyword>
            ))}
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
            <Count>{data?.like_count}</Count>
          </Button>
          <a href="#comments">
            <Image
              src="/images/message.svg"
              width={20}
              height={20}
              alt="댓글"
              style={{ marginBottom: -1 }}
            />
            <Count>{data?.comment_count}</Count>
          </a>
        </Counts>
      </CountsSection>
      <CommentsSection id="comments">
        <A11yTitle as="h2">댓글</A11yTitle>

        <Comments reviewSeq={reviewSeq} />
      </CommentsSection>
    </StyledGrid>
  )
}
export default ReviewDetails

const ChannelCard = styled.div`
  grid-column: 1 / -1;
  padding: 20px 18px;
  border: 1px solid ${({ theme }) => theme.color.G40};
  border-radius: 12px;

  display: flex;
  gap: 8px;

  margin-top: 14px;
`

const Category = styled.span`
  display: flex;
  gap: 8px;
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};

  span {
    ${borderGradient(1)}
    padding: 1px 7px;
    border-radius: 69px;
  }
`

const ChannelTextInfo = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`

const ChannelTitle = styled.em`
  ${({ theme }) => theme.typo.P100B}
  color: ${({ theme }) => theme.color.G100};
  font-style: normal;
`

const ChannelCategories = styled.div`
  display: flex;
  gap: 4px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
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
