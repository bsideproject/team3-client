import styled from 'styled-components'
import ExclamationMark from '@/images/circle-exclamation-mark.svg'

// svg 컴포넌트 타이핑 안되는 문제 해결하자
const ErrorExclamationMark = styled(ExclamationMark).attrs({
  role: 'img',
  ['aria-labelledby']: 'title desc',
  width: '16px',
  height: '16px',
})`
  path,
  circle {
    stroke: ${({ theme }) => theme.color.SR100};
  }
`

export default ErrorExclamationMark
