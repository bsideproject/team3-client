import BoxedTextArea from '@/components/ui/inputs/BoxedTextArea'
import TextArea from '@/components/ui/inputs/TextArea'
import { useContext } from 'react'
import { memo, useState } from 'react'
import { ReviewAddDetailReviewContext } from 'src/contexts/review-contexts'
import styled from 'styled-components'
import {
  InputInfoWrapper,
  RequiredText,
  SmallTitle,
  WordCount,
} from './components/utilComponents'

type Props = {
  className?: string
}

const DetailReview = memo(({ className }: Props) => {
  const { detailReview, changeDetailReview } = useContext(
    ReviewAddDetailReviewContext
  )

  return (
    <Section className={className}>
      <SmallTitle style={{ marginBottom: -10 }}>
        상세 리뷰
        <RequiredText />
      </SmallTitle>
      <InputInfoWrapper>
        <span></span>
        <WordCount>{detailReview.length} / 1000</WordCount>
      </InputInfoWrapper>
      <StyledBoxedTextArea
        value={detailReview}
        placeholder="채널에 대한 상세리뷰를 남겨주세요 (최소 20글자 이상)"
        onChange={(e) => changeDetailReview(e.target.value)}
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
