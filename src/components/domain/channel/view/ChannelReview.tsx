import SimpleDropdown from '@/components/ui/dropdowns/SimpleDropdown'
import { inheritGrid } from '@/styles/mixins'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import ChannelReviewBriefList from './ChannelReviewBriefList'

type Props = {
  className?: string
}

const ChannelReview = ({ className }: Props) => {
  const [orderBy, setOrderBy] = useState('최신순')

  return (
    <Section className={className}>
      <Header>
        <Title>
          <Image
            src="/images/writing-with-pencil.png"
            width={16}
            height={15}
            alt="종이 위 연필"
          />
          <span className="text">채널 리뷰</span>
          <span className="subscribers-count">1278개</span>
        </Title>
        <OrderByDropdown
          position="left"
          menus={['최신순', '인기순']}
          selectedMenu={orderBy}
          onSelectItem={(selected) => setOrderBy(selected)}
        />
      </Header>
      <ReviewList>
        <ChannelReviewBriefList />
      </ReviewList>
    </Section>
  )
}
export default ChannelReview

const Title = styled.h2`
  .text {
    ${({ theme }) => theme.typo.H50B}
    color: ${({ theme }) => theme.color.G80};
    margin-left: 2px;
  }

  .subscribers-count {
    ${({ theme }) => theme.typo.H50M}
    color: ${({ theme }) => theme.color.G60};
    margin-left: 8px;
  }
`

const OrderByDropdown = styled(SimpleDropdown)``

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  ${Title} {
    align-self: flex-start;
  }

  ${OrderByDropdown} {
    align-self: flex-end;
  }
`

const ReviewList = styled.div`
  padding: 7px 0;
`

const Section = styled.section`
  ${inheritGrid}
  grid-template-rows: 22px 33px;

  ${Header} {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }

  ${ReviewList} {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
  }
`
