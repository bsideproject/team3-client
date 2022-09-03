import BoxedTextArea from '@/components/ui/inputs/BoxedTextArea'
import { useContext } from 'react'
import { memo, useState } from 'react'
import { ReviewAddQuickReviewContext } from 'src/contexts/review-contexts'
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

const QuickReview = memo(({ className }: Props) => {
  const { quickReview, changeQuickReview } = useContext(ReviewAddQuickReviewContext)

  return (
    <Section className={className}>
      <SmallTitle>한줄 퀵 리뷰</SmallTitle>
      <InputInfoWrapper>
        <Description>ex) 시사상식 넘버원 채널입니다.</Description>
        <WordCount>{quickReview.length} / 1000</WordCount>
      </InputInfoWrapper>
      <StyledBoxedTextArea
        value={quickReview}
        placeholder="한 두줄로 채널에 대한 생각을 알려주세요! (최소 10글자 이상)"
        onChange={(e) => changeQuickReview(e.target.value)}
      />
    </Section>
  )
})

QuickReview.displayName = 'QuickReview'

export default QuickReview

const Section = styled.section``

const StyledBoxedTextArea = styled(BoxedTextArea)`
  width: 100%;
  height: 60px;
`
