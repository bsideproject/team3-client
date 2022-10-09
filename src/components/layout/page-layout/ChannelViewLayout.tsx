import BookmarkButton from '@/components/ui/buttons/BookmarkButton'
import PageHeader from '@/components/ui/headers/PageHeader'
import { useChannelDetailsQuery } from '@/hooks/queries/channel/channelQueries'
import { bookmarkService } from '@/services'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { forwardRef, useState } from 'react'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import AppContainer from '../container-layout/AppContainer'

type Props = {
  children: ReactNode
  channelSeq: number
  hideHeader: boolean
}

const ChannelViewLayout = ({ children, channelSeq, hideHeader }: Props) => {
  const [bookmarked, setBookmarked] = useState(false)

  const queryClient = useQueryClient()

  const { data: channelData } = useChannelDetailsQuery(channelSeq)

  const { data: bookmarkStatusData } = useQuery(
    ['bookmark', channelSeq],
    () => bookmarkService.getBookmarkStatus(channelSeq),
    {
      enabled: !!channelSeq,
      onSuccess: (data) => {
        setBookmarked(data)
      },
    }
  )

  const { mutate: mutateToBookmark } = useMutation(bookmarkService.bookmarkChannel, {
    onMutate: () => {
      setBookmarked((bookmarked) => !bookmarked)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['bookmark', channelSeq])
    },
    onError: (error) => {
      setBookmarked((bookmarked) => !bookmarked)
      console.error(error)
      window.alert('북마크에 실패하였습니다.')
    },
  })

  return (
    <AppContainer>
      <StyledPageHeader
        id="channel-view-header"
        headerTitle={channelData?.name}
        headerTitleMetaInfo={`${channelData?.name} 채널정보`}
        hide={hideHeader}
        renderAdditionalUI={() => (
          <BookmarkButton
            active={bookmarked}
            onClick={() => mutateToBookmark(channelSeq)}
          />
        )}
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
