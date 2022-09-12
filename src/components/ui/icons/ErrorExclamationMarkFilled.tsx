import styled from 'styled-components'
import ExclamationMarkErrorFilled from '@/images/circle-exclamation-mark-error-filled.svg'

// svg 컴포넌트 타이핑 안되는 문제 해결하자
const ErrorExclamationMarkFilled = styled(ExclamationMarkErrorFilled).attrs({
  role: 'img',
  ['aria-labelledby']: 'title desc',
  width: '16px',
  height: '16px',
  viewBox: '0 0 16 16',
})`
  path,
  circle {
  }
`

export default ErrorExclamationMarkFilled
