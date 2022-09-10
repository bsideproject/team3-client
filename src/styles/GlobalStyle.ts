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

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1020;
		padding: 20px 16px 16px 16px;
    background-color: ${({ theme }) => theme.color.G0};
		border-radius: 8px;
	}
	
	.modal__overlay {
		position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
		z-index: 1010;
    background-color: ${({ theme }) => theme.color.G90D + '66'} ; // opacity 0.4
	}

`
export default GlobalStyle
