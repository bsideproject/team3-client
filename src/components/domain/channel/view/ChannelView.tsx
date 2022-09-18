import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import AddReviewButton from '@/components/ui/buttons/AddReviewButton'
import SimpleDropdown from '@/components/ui/dropdowns/SimpleDropdown'
import { useChannelDetailsQuery } from '@/hooks/queries/channel/channelQueries'
import { channelService } from '@/services'
import { a11yHidden, borderGradient, inheritGrid } from '@/styles/mixins'
import { ChannelDetailInfo } from '@/types/channel-types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Router from 'next/router'
import { channelDetailsQueryKey } from 'src/constants/query-keys/channel-query-keys'
import styled, { createGlobalStyle } from 'styled-components'
import ChannelInfo from './ChannelInfo'
import ChannelReview from './ChannelReview'

type Props = {
  channelSeq: number
}

const ChannelView = ({ channelSeq }: Props) => {
  const { data } = useChannelDetailsQuery(channelSeq)

  return (
    <>
      <AdditionalGlobalStyle />
      <BackgroundWrapper>
        <ImageWrapper>
          <Image
            src="/images/examples/channel-background.png"
            layout="fill"
            alt="채널 배경"
            priority={true}
            objectPosition="center"
            objectFit="cover"
            style={{ position: 'fixed' }}
          />
        </ImageWrapper>
      </BackgroundWrapper>

      <StyledGrid>
        <ChannelInfoSection channelSeq={channelSeq} />
        <ChannelReviewSection />
      </StyledGrid>
      <StyledAddReviewButton
        onClick={() => Router.push('/review/add?channelSeq=1111')}
      />
    </>
  )
}
export default ChannelView

const AdditionalGlobalStyle = createGlobalStyle`
	html {
		background: ${({ theme }) => theme.color.G30};
	}
`

const backgroundHeight = 219

const BackgroundWrapper = styled.div`
  position: relative;
  z-index: -1;
  height: ${backgroundHeight}px;
  clip-path: inset(0);
`

const ImageWrapper = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: var(--content-width, 100%);
  height: ${backgroundHeight}px;
  /* background-size: auto;
  background-position: top center;
  background-attachment: fixed; */
`

const ChannelInfoSection = styled(ChannelInfo)``
const ChannelReviewSection = styled(ChannelReview)``

const StyledGrid = styled(GridContainer)`
  ${ChannelInfoSection} {
    grid-column: 1 / -1;
  }

  ${ChannelReviewSection} {
    grid-column: 1 / -1;
  }
`

const StyledAddReviewButton = styled(AddReviewButton)`
  position: fixed;
  right: 24px;
  bottom: 30px;
`
