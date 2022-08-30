import styled from 'styled-components'

export const RequiredText = styled.span`
  ::before {
    content: '(필수)';
    ${({ theme }) => theme.typo.P50M}
    color: ${({ theme }) => theme.color.PP600};
    margin-left: 4px;
  }
`

export const SmallTitle = styled.h2`
  ${({ theme }) => theme.typo.H50M}
  color: ${({ theme }) => theme.color.G70};
`

export const Description = styled.p`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};
`

export const WordCount = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.color.G30D};
`

export const InputInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
