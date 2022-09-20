import PageHeader from '@/components/ui/headers/PageHeader'
import { useChannelDetailsQuery } from '@/hooks/queries/channel/channelQueries'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import AppContainer from '../container-layout/AppContainer'

type Props = {
  children: ReactNode
  channelSeq: number
  hideHeader: boolean
}

const ChannelViewLayout = ({ children, channelSeq, hideHeader }: Props) => {
  const { data } = useChannelDetailsQuery(channelSeq)

  return (
    <AppContainer>
      <StyledPageHeader
        id="channel-view-header"
        headerTitle={data?.name}
        headerTitleMetaInfo={`${data?.name} 채널정보`}
        hide={hideHeader}
        hasPrev
      />
      <main>{children}</main>
    </AppContainer>
  )
}

ChannelViewLayout.displayName = 'ChannelViewLayout'
export default ChannelViewLayout

const StyledPageHeader = styled(PageHeader)<{ hide: boolean }>`
  transition: 0.6s;

  ${({ hide }) =>
    hide &&
    css`
      background: rgba(255, 255, 255, 0);
      border-bottom: rgba(255, 255, 255, 0);

      .title {
        opacity: 0;
      }
    `}
`
