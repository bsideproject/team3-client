import BoxedTextArea from '@/components/ui/inputs/BoxedTextArea'
import TextArea from '@/components/ui/inputs/TextArea'
import { memo, useState } from 'react'
import styled from 'styled-components'
import {
  InputInfoWrapper,
  RequiredText,
  SmallTitle,
  WordCount,
} from './components/utilComponents'

type Props = {
  className?: string
  word: string
  onChangeWord: (word: string) => void
}

const DetailReview = memo(({ className, word, onChangeWord }: Props) => {
  return (
    <Section className={className}>
      <SmallTitle style={{ marginBottom: -10 }}>
        상세 리뷰
        <RequiredText />
      </SmallTitle>
      <InputInfoWrapper>
        <span></span>
        <WordCount>{word.length} / 1000</WordCount>
      </InputInfoWrapper>
      <StyledBoxedTextArea
        value={word}
        placeholder="채널에 대한 상세리뷰를 남겨주세요 (최소 20글자 이상)"
        onChange={(e) => onChangeWord(e.target.value)}
      />
    </Section>
  )
})
DetailReview.displayName = 'DetailReview'

export default DetailReview

const Section = styled.section``

const StyledBoxedTextArea = styled(BoxedTextArea)`
  width: 100%;
  height: 121px;
`
