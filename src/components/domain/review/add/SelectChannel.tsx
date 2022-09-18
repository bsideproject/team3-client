import Button from '@/components/ui/buttons/Button'
import { ChannelLocalSearchInfo } from '@/types/channel-types'
import { getSummarizedCount } from '@/utils/convertingValueUtils'
import Image from 'next/image'
import { memo, useContext, useState } from 'react'
import { ReviewAddSelectChannelContext } from 'src/contexts/review-contexts'
import styled, { css } from 'styled-components'
import ChannelSearch from './ChannelSearch'

type Props = {
  className?: string
}

const SelectChannel = memo(({ className }: Props) => {
  const { selectedChannel, changeSelectedChannel } = useContext(
    ReviewAddSelectChannelContext
  )
  const [channelSearchVisible, setChannelSearchVisible] = useState(false)

  const handleSearchChannelOpen = () => {
    setChannelSearchVisible(true)
  }

  const handleSearchChannelClose = () => {
    setChannelSearchVisible(false)
  }

  return (
    <Section className={className}>
      <Title>리뷰할 채널</Title>
      <SearchButton onClick={handleSearchChannelOpen} hasBorder={!selectedChannel}>
        {selectedChannel ? (
          <SelectedChannelInfo>
            <ChannelImageWrapper>
              <Image
                src={selectedChannel.imageUrl}
                layout="fill"
                alt="채널 이미지"
              />
            </ChannelImageWrapper>
            <ChannelTitle>{selectedChannel.name}</ChannelTitle>
            <SubscribersInfo>
              구독자 {getSummarizedCount(selectedChannel.subscribersCount)}명
            </SubscribersInfo>
          </SelectedChannelInfo>
        ) : (
          <NotSelectedIndicator>
            <Image
              src="/images/search-mag-glass.svg"
              width={24}
              height={24}
              alt="돋보기 아이콘"
            />
            <SearchButtonText>채널 찾아보기 👀</SearchButtonText>
          </NotSelectedIndicator>
        )}
      </SearchButton>

      {channelSearchVisible && (
        <ChannelSearch
          onClose={handleSearchChannelClose}
          selectedChannel={selectedChannel}
          onSelectChannel={(channelInfo) => changeSelectedChannel(channelInfo)}
        />
      )}
    </Section>
  )
})

SelectChannel.displayName = 'SelectChannel'

export default SelectChannel

const Section = styled.section``

const Title = styled.h2`
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G100};
  margin-bottom: 16px;
`

const NotSelectedIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82px;
`

const SearchButton = styled(Button)<{ hasBorder: boolean }>`
  width: 100%;
  ${({ hasBorder }) =>
    hasBorder &&
    css`
      border: 1px solid ${({ theme }) => theme.color.PB600};
    `}
  border-radius: 4px;
`

const SearchButtonText = styled.span`
  ${({ theme }) => theme.typo.H50R}
  color: ${({ theme }) => theme.color.G40D};
`

const SelectedChannelInfo = styled.article`
  text-align: center;
`

const ChannelImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`

const ChannelTitle = styled.h3`
  margin-top: 10px;
  ${({ theme }) => theme.typo.P200B}
  color: ${({ theme }) => theme.color.G100};
`

const SubscribersInfo = styled.p`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50D};
`
