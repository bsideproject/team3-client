import styled from 'styled-components'

const InconspicuousLink = styled.a`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50};
  display: flex;
  align-items: center;
  text-decoration: underline;
`

export default InconspicuousLink
