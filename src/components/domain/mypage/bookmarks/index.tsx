import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import A11yElement from '@/components/ui/titles/A11yElement'
import { bookmarkService } from '@/services'
import { inheritGrid } from '@/styles/mixins'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import BookmarkChannelItem from './BookmarkChannelItem'

const Bookmarks = () => {
  const { data } = useQuery(['bookmark-list'], () =>
    bookmarkService.getBookmarkList()
  )

  return (
    <>
      <A11yElement as="h1">찜한 채널</A11yElement>
      <StyledGrid>
        <Count>🪐 {data?.bookmark_channel_count}개 채널</Count>
        <BookmarkChannelList>
          {data?.channel_list.map((channel) => (
            <BookmarkChannelItem key={channel.id} data={channel} />
          ))}
        </BookmarkChannelList>
      </StyledGrid>
    </>
  )
}
export default Bookmarks

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 45px auto;
  gap: 8px;
`

const Count = styled.span`
  grid-column: 1 / -1;
  place-self: end left;
  ${({ theme }) => theme.typo.H50M}
  color: ${({ theme }) => theme.color.G60};
`

const BookmarkChannelList = styled.ul`
  grid-column: 1 / -1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
`
