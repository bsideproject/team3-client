import BookmarkButton from '@/components/ui/buttons/BookmarkButton'
import Button from '@/components/ui/buttons/Button'
import BookmarkIcon from '@/components/ui/icons/BookmarkIcon'
import { bookmarkService } from '@/services'
import { borderGradient } from '@/styles/mixins'
import { BookmarkedChannelInfo } from '@/types/channel-types'
import { getSummarizedCount } from '@/utils/convertingValueUtils'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  data: BookmarkedChannelInfo
}

const BookmarkChannelItem = ({ className, data }: Props) => {
  const [bookmarked, setBookmarked] = useState(true)

  const { mutate: mutateToBookmark } = useMutation(bookmarkService.bookmarkChannel, {
    onMutate: () => {
      setBookmarked((bookmarked) => !bookmarked)
    },
    onError: (error) => {
      console.error(error)
      window.alert(`북마크 ${bookmarked ? '' : '취소를 '}실패하였습니다.`)
      setBookmarked((bookmarked) => !bookmarked)
    },
  })

  return (
    <Wrapper className={className}>
      <Image
        src={data.thumbnail_url}
        width={87}
        height={87}
        alt={`${data.title} 채널사진`}
      />
      <Info>
        <Title>
          {data.title} ({data.review_count})
        </Title>
        <Counts>
          <span>구독자 {getSummarizedCount(data.subscriber_count)}명</span>・
          <span>동영상 {getSummarizedCount(data.video_count)}개</span>
        </Counts>
        <Categories>
          {data.youtube_channel_user_category_list.map((category) => (
            <Category key={category.category_id}>{category.category}</Category>
          ))}
        </Categories>
        <Tags>
          {data.youtube_channel_tag_list.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Info>
      <StyledBookmarkButton
        aria-label={`${data.title} ${bookmarked ? '북마크 하기' : '북마크 취소'}`}
        active={bookmarked}
        onClick={() => mutateToBookmark(data.id)}
      />
    </Wrapper>
  )
}
export default BookmarkChannelItem

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

const StyledBookmarkButton = styled(BookmarkButton)`
  position: absolute;
  top: 7px;
  right: 6px;
`
