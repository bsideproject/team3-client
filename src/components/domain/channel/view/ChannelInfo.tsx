import { useChannelDetailsQuery } from '@/hooks/queries/channel/channelQueries'
import { a11yHidden, borderGradient } from '@/styles/mixins'
import { getSummarizedCount } from '@/utils/convertingValueUtils'
import Image from 'next/image'
import styled from 'styled-components'
import moment from 'moment'

type Props = {
  className?: string
  channelSeq: number
}

const ChannelInfoSection = ({ className, channelSeq }: Props) => {
  const { data } = useChannelDetailsQuery(channelSeq)

  return (
    <Section className={className}>
      <Title>채널 정보</Title>
      <Info>
        <ChannelImageWrapper>
          <Image
            src={data?.imageUrl as string}
            width={80}
            height={80}
            alt="채널 이미지"
            style={{ borderRadius: '50%' }}
          />
        </ChannelImageWrapper>
        <ChannelName>
          {data?.name}
          <Image
            src="/images/youtube-inverted-round.svg"
            width={20}
            height={20}
            alt="유튜브 아이콘"
          />
        </ChannelName>
        <NemericalData>
          <span>구독자 {getSummarizedCount(data?.subscribersCount)}명</span> 𐄁{' '}
          <span>동영상 {getSummarizedCount(data?.videosCount)}개</span>
        </NemericalData>
        <Description>{data?.description}</Description>
        <UpdateDate>
          <span>{moment(data?.modifiedDate).format('YYYY-MM-DD')}</span>
          {` `}
          <span>업데이트</span>
        </UpdateDate>

        <Specification>
          {data?.userCategories && (
            <Category>
              {data.userCategories.map((category) => (
                <span key={category.id}>{category.label}</span>
              ))}
            </Category>
          )}
          {data?.userTags && (
            <Tags>
              {data.userTags.map((tag) => (
                <span key={tag.id}>{tag.label}</span>
              ))}
            </Tags>
          )}
        </Specification>
      </Info>
    </Section>
  )
}
export default ChannelInfoSection

const Section = styled.section`
  background: ${({ theme }) => theme.color.background};
  border-radius: 12px;
  margin-top: -56px;
`

const Title = styled.h2`
  ${a11yHidden}
`

const Info = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChannelImageWrapper = styled.span`
  margin-top: -35px;
`

const ChannelName = styled.b`
  display: flex;
  align-items: center;
  gap: 5px;
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G100};
  margin-top: 4px;
`

const NemericalData = styled.span`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50D};
  margin-top: 3px;
`

const Description = styled.span`
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G100};
  text-align: center;
  margin-top: 24px;
  padding: 0 18px;
`

const UpdateDate = styled.span`
  color: ${({ theme }) => theme.color.G30D};
  font-size: 8px;
  line-height: 16px;
  font-weight: 400;
  margin-top: 24px;

  span:nth-of-type(1) {
    font-family: 'Roboto' sans-serif;
  }
  span:nth-of-type(2) {
    font-family: 'Noto Sans KR' sans-serif;
    letter-spacing: -0.5px;
  }
`

const Specification = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.G30};
  margin-top: 8px;
  padding: 17px 0 19px 0;
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

const Tags = styled.span`
  display: flex;
  gap: 5px;

  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};

  span::before {
    content: '#';
  }
`
