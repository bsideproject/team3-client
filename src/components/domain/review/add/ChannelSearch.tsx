import Button from '@/components/ui/buttons/Button'
import BoxedSearchInput from '@/components/ui/inputs/BoxedSearchInput'
import { borderGradient } from '@/styles/mixins'
import { ChannelLocalSearchInfo } from '@/types/channelTypes'
import { getSummarizedCount } from '@/utils/convertingValueUtils'
import Image from 'next/image'
import { KeyboardEventHandler, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

type Props = {
  onClose: () => void
  selectedChannel: ChannelLocalSearchInfo | null
  onSelectChannel: (channelInfo: ChannelLocalSearchInfo) => void
}

const data: ChannelLocalSearchInfo[] = [
  {
    channelSeq: 1,
    name: '미야옹철의 냥냥펀치',
    subscribersCount: 2270000,
    imageUrl: '/images/examples/channel-image.png',
    reviewsCount: 22,
  },
  {
    channelSeq: 2,
    name: '미야옹철의 냥냥펀치2',
    subscribersCount: 2270000,
    imageUrl: '/images/examples/channel-image.png',
    reviewsCount: 22,
  },
  {
    channelSeq: 3,
    name: '미야옹철의 냥냥펀치3',
    subscribersCount: 2270000,
    imageUrl: '/images/examples/channel-image.png',
    reviewsCount: 22,
  },
  {
    channelSeq: 4,
    name: '미야옹철의 냥냥펀치4',
    subscribersCount: 2270000,
    imageUrl: '/images/examples/channel-image.png',
    reviewsCount: 22,
  },
  {
    channelSeq: 5,
    name: '미야옹철의 냥냥펀치5',
    subscribersCount: 2270000,
    imageUrl: '/images/examples/channel-image.png',
    reviewsCount: 22,
  },
  {
    channelSeq: 6,
    name: '미야옹철의 냥냥펀치6',
    subscribersCount: 2270000,
    imageUrl: '/images/examples/channel-image.png',
    reviewsCount: 22,
  },
  {
    channelSeq: 7,
    name: '미야옹철의 냥냥펀치7',
    subscribersCount: 2270000,
    imageUrl: '/images/examples/channel-image.png',
    reviewsCount: 22,
  },
  {
    channelSeq: 8,
    name: '미야옹철의 냥냥펀치8',
    subscribersCount: 2270000,
    imageUrl: '/images/examples/channel-image.png',
    reviewsCount: 22,
  },
]

const ChannelSearch = ({ onClose, selectedChannel, onSelectChannel }: Props) => {
  const [word, setWord] = useState('')

  const handleSearch = () => {
    console.log(word)
    setWord('')
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <BackDrop onClick={onClose} />
      <Container>
        <Header>
          <Title>리뷰할 채널</Title>
          <CloseButton onClick={onClose}>
            <Image src="/images/x-bold.svg" layout="fill" alt="닫기" />
          </CloseButton>
        </Header>
        <StyledBoxedSearchInput
          value={word}
          placeholder="채널명을 입력해주세요."
          onChange={(e) => setWord(e.currentTarget.value)}
          onClear={() => {
            setWord('')
          }}
          onKeyDown={handleKeyDown}
          onSearch={handleSearch}
        />
        <ChannelList>
          {data.map((item) => (
            <ChannelItem
              key={item.channelSeq}
              selected={item.channelSeq === selectedChannel?.channelSeq}
            >
              <ChannelButton onClick={() => onSelectChannel(item)}>
                <ChannelInfo>
                  <ChannelImageContainer>
                    <Image
                      src={item.imageUrl}
                      layout="fill"
                      alt={`${item.name} 채널 썸네일`}
                    />
                  </ChannelImageContainer>
                  <ChannelText>
                    <ChannelTtitle>{item.name}</ChannelTtitle>
                    <ChannelNumbers>
                      <span>
                        구독자 {getSummarizedCount(item.subscribersCount)}명
                      </span>
                      |<span>리뷰 {getSummarizedCount(item.reviewsCount)}개</span>
                    </ChannelNumbers>
                  </ChannelText>
                </ChannelInfo>
                <SelectedIcon>
                  <Image
                    src="/images/rounded-check.svg"
                    layout="fill"
                    alt="선택됨 아이콘"
                  />
                </SelectedIcon>
              </ChannelButton>
            </ChannelItem>
          ))}
        </ChannelList>
      </Container>
    </>
  )
}
export default ChannelSearch

const wrapperHeight = 602

const fadeIn = keyframes`
	from {
		bottom: -${wrapperHeight}px;
	}

	to {
		bottom: 0;
	}
`

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  width: var(--content-width, 100%);
  transform: translateX(-50%);
  z-index: 1010;
  background: ${({ theme }) => theme.color.G90D};
  opacity: 0.2;
`

const Container = styled.div`
  animation: ${fadeIn} 0.6s;
  position: fixed;
  left: 50%;
  bottom: 0;
  display: grid;
  grid-template-rows: auto auto 1fr;
  width: var(--content-width, 100%);
  transform: translateX(-50%);
  z-index: 1020;
  height: ${wrapperHeight}px;
  background: ${({ theme }) => theme.color.G0};
  border-radius: 22px 22px 0 0;
  padding: 0 15px;
`

const Header = styled.header`
  position: relative;
  height: 68px;
`

const Title = styled.b`
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme.typo.H75R}
  color: ${({ theme }) => theme.color.G70};
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 0;
  width: 22px;
  height: 22px;
`

const StyledBoxedSearchInput = styled(BoxedSearchInput)`
  width: 100%;
`

const ChannelButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
`

const ChannelText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 11px;
`

const ChannelImageContainer = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid transparent;
`

const ChannelTtitle = styled.b`
  ${({ theme }) => theme.typo.P200B}
  color: ${({ theme }) => theme.color.G100};
`

const ChannelNumbers = styled.div`
  display: flex;
  gap: 6px;
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50D};

  span:last-of-type {
    color: ${({ theme }) => theme.color.PP400};
  }
`

const SelectedIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`

const ChannelList = styled.ul`
  padding: 0 5px;
  margin-top: 20px;
  overflow: auto;
`

const ChannelItem = styled.li<{ selected: boolean }>`
  padding: 10px 8px 10px 4px;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.G40};
  }

  ${SelectedIcon} {
    display: none;
  }

  ${({ selected }) =>
    selected &&
    css`
      ${ChannelImageContainer} {
        ${borderGradient(2)}
      }

      ${SelectedIcon} {
        display: block;
      }
    `}
`
