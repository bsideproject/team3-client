import 'styled-components'
import theme from '@/styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    typo: typeof theme.dark.typo
    gradient: typeof theme.dark.gradient
    grid: typeof theme.dark.grid
    color: typeof theme.dark.color
  }
}
