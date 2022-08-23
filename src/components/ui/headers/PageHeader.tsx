import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import PrevButton from '@/components/ui/buttons/PrevButton'
import Router from 'next/router'
import Button from '../buttons/Button'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  title?: string
  hasPrev?: boolean
  hasBookmark?: boolean
}

const PageHeader = ({ className, title, hasPrev, hasBookmark, ...props }: Props) => {
  const handleGoBack = () => {
    Router.back()
  }

  return (
    <Wrapper className={className} {...props}>
      {hasPrev && <StyledPrevButton onClick={handleGoBack} />}
      <Title>{title}</Title>
      {hasBookmark && <Button aria-label="북마크"></Button>}
    </Wrapper>
  )
}

export default PageHeader

export const pageHeaderHeight = 72

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  display: grid;
  grid-template-columns: 40px 1fr 40px;
  padding-top: 24px;
  padding-bottom: 20px;
  place-items: center;
  height: ${pageHeaderHeight}px;
  background: ${({ theme }) => theme.color.background};
`

const StyledPrevButton = styled(PrevButton)`
  grid-column: 1 / 2;
  place-self: center start;
  margin-left: 11px;
`

const Title = styled.h1`
  grid-column: 2 / 3;
  ${({ theme }) => theme.typo.H75R}
  color: ${({ theme }) => theme.color.G70};
`
