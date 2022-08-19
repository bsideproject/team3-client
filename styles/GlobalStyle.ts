import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import fonts from './fonts'
import resetStyle from './resetStyle'

const GlobalStyle = createGlobalStyle`
	${normalize}
	/* ${fonts} */
	${resetStyle}

	html {
		background: ${({ theme }) => theme.color.background};
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		color: ${({ theme }) => theme.color.default};
		font-weight: 400;
		font-size: 16px;
	}

	* {
		box-sizing: border-box;
	}
`
export default GlobalStyle
