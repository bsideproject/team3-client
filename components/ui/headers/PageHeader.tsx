import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import PrevButton from '@/components/ui/buttons/PrevButton'
import Router from 'next/router'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
  hasPrev?: boolean
}

const defaultProps: Partial<Props> = {
  hasPrev: false,
}

const PageHeader = ({ title, hasPrev, ...props }: Props) => {
  const handleGoBack = () => {
    Router.back()
  }

  return (
    <Wrapper {...props}>
      {hasPrev && <StyledPrevButton onClick={handleGoBack} />}
      <Title>{title}</Title>
    </Wrapper>
  )
}

PageHeader.defaultProps = defaultProps

export default PageHeader

export const pageHeaderHeight = 72

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding-top: 24px;
  padding-bottom: 20px;
  place-items: center;
  height: ${pageHeaderHeight}px;
`

const StyledPrevButton = styled(PrevButton)`
  grid-column: 1 / 2;
  place-self: center start;
  margin-left: 11px;
`

const Title = styled.h1`
  grid-column: 3 / 4;
  ${({ theme }) => theme.typo.H75R}
  color: ${({ theme }) => theme.color.G70};
`
