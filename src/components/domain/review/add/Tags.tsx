import BoxedInput from '@/components/ui/inputs/BoxedInput'
import { ChangeEventHandler, useState } from 'react'
import styled from 'styled-components'
import {
  Description,
  InputInfoWrapper,
  SmallTitle,
  WordCount,
} from './components/utilComponents'

type Props = {
  className?: string
  tags: Array<string>
  onChangeTags: (tags: Array<string>) => void
}

const Tags = ({ className, tags, onChangeTags }: Props) => {
  const [word, setWord] = useState('')

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
      />
    </section>
  )
}
export default Tags

const StyledBoxedInput = styled(BoxedInput)`
  width: 100%;
`
