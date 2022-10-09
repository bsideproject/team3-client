import Button from '@/components/ui/buttons/Button'
import UnderlinedTitle from '@/components/ui/titles/UnderlinedHeading'
import { Review } from '@/types/review-types'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  data: Review
}

const ChannelReviewBriefItem = ({ data }: Props) => {
  const [detail, setDetail] = useState(false)

  return (
    <Article>
      <Header>
        <Profile>
          <Image
            src={data.user_info.profile_img}
            width={40}
            height={40}
            alt="프로필사진"
            style={{ borderRadius: '50%' }}
          />
          <ProfileText>
            <WriterName>{data.user_info.nickname}</WriterName>
            <RegDate>{moment(data.created_date).format('YYYY-MM-DD')}</RegDate>
          </ProfileText>
        </Profile>
        <Details>
          <Rating>
            <Image src="/images/star.svg" width={12} height={12} alt="별" />
            <span>{data.star_rating}</span>
          </Rating>
          <Keywords>
            {data.youtube_channel_tag_list
              .sort((a, b) => a.tag_order - b.tag_order)
              .map((tag) => (
                <Keyword key={tag.id}>{tag.name}</Keyword>
              ))}
          </Keywords>
        </Details>
      </Header>
      <Review>
        <div style={{ marginBottom: '18px' }}>
          {/* <Title level="h3" align="center">
            가볍게 다양한 주제의 맥락을 파악할 수 있는 채널
          </Title> */}
          <Paragraph detail={detail}>{data.review_body}</Paragraph>
          {!detail && (
            <DetailButton onClick={() => setDetail(true)}>자세히 보기</DetailButton>
          )}
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
            <Count>{data.like_count}</Count>
          </Button>
          <Link href={`/review/view/${data.id}`}>
            <a>
              <Image
                src="/images/message.svg"
                width={20}
                height={20}
                alt="댓글"
                style={{ marginBottom: -1 }}
              />
              <Count>{data.comment_count}</Count>
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

const Paragraph = styled.p<{ detail: boolean }>`
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G60};

  ${({ detail }) =>
    !detail &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
    `}
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
