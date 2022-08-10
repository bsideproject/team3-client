import styled, { css } from 'styled-components'
import Input from './Input'

const UnderlinedInput = styled(Input)<{ isActive?: boolean; isError?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.color.G40};

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 1px solid transparent;
      background-image: linear-gradient(
          ${({ theme }) => theme.color.background},
          ${({ theme }) => theme.color.background}
        ),
        ${({ theme }) => theme.gradient.G100};
      background-origin: border-box;
      background-clip: padding-box, border-box;
    `}

  ${({ isError }) =>
    isError &&
    css`
      border-bottom: 1px solid #e70000;
    `}

  height: 36px;
  padding: 6px 0;

  ${({ theme }) => theme.typo.P200R}
  color: #000;

  ::placeholder {
    ${({ theme }) => theme.typo.P200R}
    color: ${({ theme }) => theme.color.G50};
  }
`

export default UnderlinedInput
