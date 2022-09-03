import Button from '@/components/ui/buttons/Button'
import BoxedInput from '@/components/ui/inputs/BoxedInput'
import Image from 'next/image'
import { useContext } from 'react'
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  memo,
  MouseEventHandler,
  useState,
} from 'react'
import { ReviewAddTagsContext } from 'src/contexts/review-contexts'
import styled from 'styled-components'
import {
  Description,
  InputInfoWrapper,
  SmallTitle,
  WordCount,
} from './components/utilComponents'

type Props = {
  className?: string
}

const Tags = memo(({ className }: Props) => {
  const { tags, changeTags } = useContext(ReviewAddTagsContext)
  const [word, setWord] = useState('')

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      if (word.trim().length > 0 && tags.length < 5) {
        changeTags([...new Set([...tags, word.trim()])])
      }
      setWord('')
    }
  }

  const handleDeleteTag: MouseEventHandler<HTMLButtonElement> = (e) => {
    const tagToDelete = e.currentTarget.dataset.tag
    changeTags(tags.filter((tag) => tag !== tagToDelete))
  }

  return (
    <section className={className}>
      <SmallTitle style={{ marginBottom: 4 }}>채널 태그</SmallTitle>
      <InputInfoWrapper>
        <Description style={{ marginBottom: 8 }}>
          최대 5개까지 입력가능합니다.
        </Description>
        <WordCount>{word.length} / 20</WordCount>
      </InputInfoWrapper>
      <StyledBoxedInput
        value={word}
        placeholder="키워드를 입력해주세요! (최소 1글자 이상)"
        onChange={(e) => setWord(e.currentTarget.value)}
        onClear={() => setWord('')}
        onKeyDown={handleKeyDown}
      />
      <TagList>
        {tags.map((tag) => (
          <Tag key={tag}>
            {tag}{' '}
            <TagDeleteButton
              aria-label={`${tag} 태그 삭제`}
              data-tag={tag}
              onClick={handleDeleteTag}
            >
              <Image src="/images/x-tiny.svg" layout="fill" alt="X" />
            </TagDeleteButton>
          </Tag>
        ))}
      </TagList>
    </section>
  )
})

Tags.displayName = 'Tags'

export default Tags

const StyledBoxedInput = styled(BoxedInput)`
  width: 100%;
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`

const Tag = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  background: rgba(244, 230, 255, 0.5);
  border-radius: 4px;
  ${({ theme }) => theme.typo.P50M}

  ::before {
    content: '#';
  }
`

const TagDeleteButton = styled(Button)`
  position: relative;
  width: 8px;
  height: 8px;
  margin-left: 4px;
`
