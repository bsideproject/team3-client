import { css } from 'styled-components'

export const resetButton = css`
  user-select: none;
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable input' types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`

export const a11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`

export const gradientText = css`
  background: ${({ theme }) => theme.gradient.G100T};
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`

export const viewportHeight = css`
  height: 100vh; /* 혹시나 Custom Property 지원 안하는 브라우저를 위한 복귀점(Fallback) */
  height: calc(var(--vh, 1vh) * 100);
`

export const borderGradient = (
  borderWidth: number,
  borderPosition?: ('top' | 'bottom' | 'left' | 'right')[],
  backgroundColor?: string
) => {
  let borderCSS = ''
  if (borderPosition) {
    borderPosition.forEach((position) => {
      borderCSS += `border-${position}: ${borderWidth}px solid transparent;`
    })
  } else {
    borderCSS = `border: ${borderWidth}px solid transparent;`
  }

  return css`
    ${borderCSS}
    background-image: ${backgroundColor
      ? css`linear-gradient(
          ${backgroundColor},
          ${backgroundColor}
        ),
        ${({ theme }) => theme.gradient.G100}`
      : css`linear-gradient(
          ${({ theme }) => theme.color.background},
          ${({ theme }) => theme.color.background}
        ),
        ${({ theme }) => theme.gradient.G100}`};
    background-origin: border-box;
    background-clip: padding-box, border-box;
  `
}
