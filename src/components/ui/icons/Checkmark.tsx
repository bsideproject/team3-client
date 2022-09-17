import styled, { css } from 'styled-components'
import CheckmarkImg from '@/images/checkmark.svg'

type Props = {
  $small?: boolean
  $color?: 'blue' | 'purple'
}

// svg 컴포넌트 타이핑 안되는 문제 해결하자
const Checkmark = styled(CheckmarkImg).attrs(({ $small }: Props) => ({
  role: 'img',
  ['aria-labelledby']: 'title desc',
  width: $small ? '14px' : '18px',
  height: $small ? '14px' : '18px',
  viewBox: '0 0 14 15',
}))<Props>`
  path {
    ${({ $color }) => {
      switch ($color) {
        case 'blue':
          return css`
            stroke: ${({ theme }) => theme.color.PB600};
          `
        case 'purple':
          return css`
            stroke: ${({ theme }) => theme.color.PP600};
          `
        default:
          return css`
            stroke: ${({ theme }) => theme.color.PP600};
          `
      }
    }};
  }
`

export default Checkmark
