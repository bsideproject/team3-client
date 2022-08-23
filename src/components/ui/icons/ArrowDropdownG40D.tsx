import styled from 'styled-components'
import ArrowDropDown from '@/images/arrow_drop_down.svg'

// svg 컴포넌트 타이핑 안되는 문제 해결하자
const ArrowDropdownG40D = styled(ArrowDropDown).attrs({
  role: 'img',
  ['aria-labelledby']: 'title desc',
  width: '24px',
  height: '24px',
})`
  path {
    fill: ${({ theme }) => theme.color.G40D};
  }
`

export default ArrowDropdownG40D
