import styled from 'styled-components'
import Stars from './components/Stars'
import { RequiredText, SmallTitle } from './components/utilComponents'

type Props = {
  className?: string
  rating: number
  onSetRating: (score: number) => void
}

const Rating = ({ className, rating, onSetRating }: Props) => {
  return (
    <section className={className}>
      <SmallTitle style={{ marginBottom: 15 }}>
        채널 별점
        <RequiredText />
      </SmallTitle>
      <Stars score={rating} onClick={(score) => onSetRating(score)} />
    </section>
  )
}
export default Rating
