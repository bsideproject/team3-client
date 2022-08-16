import { ChannelInfoType } from '@/pages/channel/add/[step]'
import { borderGradient } from '@/styles/mixins'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import Button from './buttons/Button'

type Props = {
  className?: string
  channelInfo: ChannelInfoType
  isSelected?: boolean
  onClick?: (channelInfo: ChannelInfoType) => void
}

const getSummarizedCount = (count: number) => {
  let summarizedCount = count
  let resultString = String(count)

  switch (true) {
    case count >= 10000:
      summarizedCount /= 10000
      resultString = summarizedCount.toFixed(1) + '만'
      break
    case count >= 1000:
      summarizedCount /= 1000
      resultString = summarizedCount.toFixed(1) + '천'
      break
  }

  return resultString
}

const ChannelInfo = ({ className, channelInfo, onClick, isSelected }: Props) => {
  console.log(isSelected)
  return (
    <Wrapper
      className={className}
      onClick={() => onClick && onClick(channelInfo)}
      isActive={isSelected}
    >
      <ImageWrapper>
        <Image
          src={channelInfo.imageUrl}
          width={52}
          height={52}
          alt="채널 이미지"
          style={{ borderRadius: '50%' }}
        />
      </ImageWrapper>
      <TextInfo>
        <ChannelName>{channelInfo.name}</ChannelName>
        <SubscribersCount>
          구독자 {getSummarizedCount(channelInfo.subscribersCount)}명
        </SubscribersCount>
      </TextInfo>
    </Wrapper>
  )
}

export default ChannelInfo

const Wrapper = styled(Button)<{ isActive?: boolean }>`
  display: flex;
  align-items: stretch;
  gap: 22px;
  height: 85px;
  padding: 0 17px;
  background: ${({ theme }) => theme.color.G30};
  border-radius: 59px;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      ${borderGradient(2, ['top', 'bottom', 'left', 'right'], theme.color.G30)}
      padding: 0 15px;
    `}
`

const ChannelName = styled.b`
  ${({ theme }) => theme.typo.H75B}
  color: ${({ theme }) => theme.color.G100};
`

const SubscribersCount = styled.span`
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G60};
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
