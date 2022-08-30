import styled from 'styled-components'
import TextArea from './TextArea'

const BoxedTextArea = styled(TextArea)`
  border: 1px solid ${({ theme }) => theme.color.G40};
  border-radius: 4px;
  padding: 10px;
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G100};

  ::placeholder {
    color: ${({ theme }) => theme.color.G50};
  }
`

export default BoxedTextArea
