import Button from '@/components/ui/buttons/Button'
import BookmarkIcon from '@/components/ui/icons/BookmarkIcon'
import { borderGradient } from '@/styles/mixins'
import Image from 'next/image'
import styled from 'styled-components'

type Props = {
  className?: string
}

const BookmarkChannelCard = ({ className }: Props) => {
  return (
    <Wrapper className={className}>
      <Image
        src="/images/examples/bookmark-image.png"
        width={87}
        height={87}
        alt="속삭이는몽자 채널사진"
      />
      <Info>
        <Title>속삭이는 몽자 (1000+)</Title>
        <Counts>
          <span>구독자 227만명</span>・<span>동영상 1.1천개</span>
        </Counts>
        <Categories>
          <Category>반려동물</Category>
        </Categories>
        <Tags>
          <Tag>슈카월드</Tag>
          <Tag>패셔니스타</Tag>
        </Tags>
      </Info>
      <BookmarkButton
        aria-label={`속삭이는 몽자 ${true ? '북마크 하기' : '북마크 취소'}`}
      >
        <BookmarkIcon $active={true} />
      </BookmarkButton>
    </Wrapper>
  )
}
export default BookmarkChannelCard

const Wrapper = styled.li`
  position: relative;
  display: flex;
  gap: 15px;
  background: ${({ theme }) => theme.color.G0};
  border-radius: 8px;
  padding: 14px 13px;
`

const Info = styled.div``

const Title = styled.h2`
  ${({ theme }) => theme.typo.H50B}
  color: ${({ theme }) => theme.color.G100};
  margin-bottom: 1px;
`

const Counts = styled.span`
  display: flex;
  gap: 5px;
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G60};
  margin-bottom: 6px;
`

const Categories = styled.ul`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
`

const Category = styled.li`
  padding: 0 7px;
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};
  border-radius: 69px;
  ${borderGradient(1)}
`

const Tags = styled.ul`
  display: flex;
  gap: 5px;
`

const Tag = styled.li`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};

  ::before {
    content: '#';
  }
`

const BookmarkButton = styled(Button)`
  position: absolute;
  top: 7px;
  right: 6px;
`
