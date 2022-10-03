import { resetButton } from '@/styles/mixins'
import styled from 'styled-components'

const Button = styled.button`
  ${resetButton}
  > * {
    vertical-align: top;
  }
`

export default Button
