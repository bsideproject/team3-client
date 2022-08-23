import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import ChannelAddLayout from '@/components/layout/page-layout/ChannelAddLayout'
import GuideLink from '@/components/ui/links/GuideLink'
import InconspicuousLink from '@/components/ui/links/InconspicuousLink'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { ChannelInfoType } from '@/types/channelTypes'

type Props = {
  addedChannel: ChannelInfoType
}

const ChannelAddComplete = ({ addedChannel }: Props) => {
  return (
    <>
      <StyledGrid>
        <Inform>
          <Image
            src="/images/firecracker.png"
            width={36}
            height={36}
            alt="파티폭죽"
          />
          <Title>채널등록에 성공했어요!</Title>
          <Paragraph>등록하신 채널에 첫 번째 리뷰를 남겨볼까요?</Paragraph>
          <Link href={`/channel/${addedChannel.id}/review/add`}>
            <ReviewAddLink>
              <Image src="/images/plus.svg" width={12} height={12} alt="플러스" />
              리뷰 등록하기
            </ReviewAddLink>
          </Link>
        </Inform>
      </StyledGrid>
      <LinkWrapper>
        <Link href="/">
          <NoThanksLink>아니요. 괜찮아요.</NoThanksLink>
        </Link>
      </LinkWrapper>
    </>
  )
}
export default ChannelAddComplete

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 9px 1fr;
  height: 100%;
`

const Inform = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  place-self: center;
  text-align: center;
`

const Title = styled.h2`
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G100};
  margin-top: 16px;
`

const Paragraph = styled.p`
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G50D};
  margin-top: 3px;
`

const ReviewAddLink = styled.a`
  display: inline-flex;
  gap: 4px;
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G40D};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.PB600};
  border-radius: 4px;
  padding: 11px 19px;
  margin-top: 16px;
`

const LinkWrapper = styled.span`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 123px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NoThanksLink = styled(InconspicuousLink)`
  ${({ theme }) => theme.typo.P100R}
  cursor: pointer;
  display: inline-block;
`
