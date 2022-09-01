import Button from '@/components/ui/buttons/Button'
import Image from 'next/image'
import { memo } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  channelSeq: string | undefined
}

const ReviewChannel = memo(({ className }: Props) => {
  return (
    <Section className={className}>
      <Title>리뷰할 채널</Title>
      <SearchButton>
        <Image
          src="/images/search-mag-glass.svg"
          width={24}
          height={24}
          alt="돋보기 아이콘"
        />
        <SearchButtonText>채널 찾아보기 👀</SearchButtonText>
      </SearchButton>
    </Section>
  )
})

ReviewChannel.displayName = 'ReviewChannel'

export default ReviewChannel

const Section = styled.section``

const Title = styled.h2`
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G100};
  margin-bottom: 16px;
`

const SearchButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;
  border: 1px solid ${({ theme }) => theme.color.PB600};
  border-radius: 4px;
`

const SearchButtonText = styled.span`
  ${({ theme }) => theme.typo.H50R}
  color: ${({ theme }) => theme.color.G40D};
`
