import { useContext } from 'react'
import { memo } from 'react'
import { ReviewAddRatingContext } from 'src/contexts/review-contexts'
import styled from 'styled-components'
import Stars from './components/Stars'
import { RequiredText, SmallTitle } from './components/utilComponents'

type Props = {
  className?: string
}

const Rating = memo(({ className }: Props) => {
  const { rating, changeRating } = useContext(ReviewAddRatingContext)

  return (
    <section className={className}>
      <SmallTitle style={{ marginBottom: 15 }}>
        채널 별점
        <RequiredText />
      </SmallTitle>
      <Stars score={rating} onClick={(score) => changeRating(score)} />
    </section>
  )
})

Rating.displayName = 'Rating'

export default Rating
