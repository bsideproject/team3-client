import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html {
		background: ${({ theme }) => theme.color.background};
	}
`
export default GlobalStyle
