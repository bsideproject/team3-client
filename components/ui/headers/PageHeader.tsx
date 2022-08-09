import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import PrevButton from '@/components/ui/buttons/PrevButton'

interface Props extends HTMLAttributes<HTMLDivElement> {
  hasPrev?: boolean
}

const defaultProps: Partial<Props> = {
  hasPrev: false,
}

const PageHeader = ({ hasPrev, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      {hasPrev && <StyledPrevButton />}
      <Title>타이틀</Title>
    </Wrapper>
  )
}

PageHeader.defaultProps = defaultProps

export default PageHeader

const Wrapper = styled.div`
  position: relative;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledPrevButton = styled(PrevButton)`
  position: absolute;
  left: 11px;
  top: 50%;
  transform: translateY(-50%);
`

const Title = styled.h1`
  ${({ theme }) => theme.typo.H75R}
`
