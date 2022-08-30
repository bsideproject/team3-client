import BoxedTextArea from '@/components/ui/inputs/BoxedTextArea'
import { useState } from 'react'
import styled from 'styled-components'
import {
  Description,
  InputInfoWrapper,
  SmallTitle,
  WordCount,
} from './components/utilComponents'

type Props = {
  className?: string
  word: string
  onChangeWord: (word: string) => void
}

const QuickReview = ({ className, word, onChangeWord }: Props) => {
  return (
    <Section className={className}>
      <SmallTitle>한줄 퀵 리뷰</SmallTitle>
      <InputInfoWrapper>
        <Description>ex) 시사상식 넘버원 채널입니다.</Description>
        <WordCount>{word.length} / 1000</WordCount>
      </InputInfoWrapper>
      <StyledBoxedTextArea
        value={word}
        placeholder="채널에 대한 상세리뷰를 남겨주세요 (최소 20글자 이상)"
        onChange={(e) => onChangeWord(e.target.value)}
      />
    </Section>
  )
}
export default QuickReview

const Section = styled.section``

const StyledBoxedTextArea = styled(BoxedTextArea)`
  width: 100%;
  height: 60px;
`
