import styled from 'styled-components'
import ChevronBottom from '@/images/chevron_bottom_bold.svg'

// svg 컴포넌트 타이핑 안되는 문제 해결하자
const ChevronDropdownG40D = styled(ChevronBottom).attrs({
  role: 'img',
  ['aria-labelledby']: 'title desc',
})`
  path {
    fill: ${({ theme }) => theme.color.G40D};
  }
`

export default ChevronDropdownG40D
