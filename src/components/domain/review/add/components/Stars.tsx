import Button from '@/components/ui/buttons/Button'
import Image from 'next/image'
import styled from 'styled-components'

type Score = number

type Props = {
  score: Score
  onClick: (score: Score) => void
}

const Stars = ({ score, onClick }: Props) => {
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((scorePosition) =>
        scorePosition <= score ? (
          <StarHolder onClick={() => onClick(scorePosition)}>
            <Image
              src="/images/star-filled.svg"
              width={37}
              height={37}
              alt={`${scorePosition}점`}
            />
          </StarHolder>
        ) : (
          <StarHolder onClick={() => onClick(scorePosition)}>
            <Image
              src="/images/star-empty.svg"
              width={37}
              height={37}
              alt={`${scorePosition}점`}
            />
          </StarHolder>
        )
      )}
    </Wrapper>
  )
}
export default Stars

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`

const StarHolder = styled(Button)`
  position: relative;
  width: 33px;
  height: 33px;
`
