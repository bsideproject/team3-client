import SimpleDropdown from '@/components/ui/dropdowns/SimpleDropdown'
import { inheritGrid } from '@/styles/mixins'
import Image from 'next/image'
import styled from 'styled-components'

type Props = {
  className?: string
}

const ChannelReview = ({ className }: Props) => {
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
          position="right"
          menus={['최신순', '인기순']}
          selectedMenu="최신순"
          onSelectItem={(menu) => console.log(menu)}
        />
      </Header>
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

const Section = styled.section`
  ${inheritGrid}
  grid-template-rows: 22px 33px;

  ${Header} {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`
