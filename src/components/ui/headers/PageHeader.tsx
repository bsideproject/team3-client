import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import PrevButton from '@/components/ui/buttons/PrevButton'
import Router from 'next/router'
import Button from '../buttons/Button'
import Head from 'next/head'
import { forwardRef } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  headerTitle?: string
  headerTitleMetaInfo?: string
  hasPrev?: boolean
  renderAdditionalUI?: () => JSX.Element
}

const PageHeader = ({
  className,
  headerTitle,
  headerTitleMetaInfo,
  hasPrev,
  renderAdditionalUI,
  ...props
}: Props) => {
  const handleGoBack = () => {
    Router.back()
  }

  return (
    <>
      <Head>
        <title>{`${headerTitleMetaInfo ?? headerTitle} - 우주라이킷`}</title>
      </Head>
      <Wrapper className={className} {...props}>
        {hasPrev && <StyledPrevButton onClick={handleGoBack} />}
        <Title className="title">{headerTitle}</Title>
        {renderAdditionalUI && renderAdditionalUI()}
      </Wrapper>
    </>
  )
}

PageHeader.displayName = 'PageHeader'

export default PageHeader

export const pageHeaderHeight = 72

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  width: var(--content-width, 100%);
  transform: translateX(-50%);
  z-index: 999;

  display: grid;
  grid-template-columns: 40px 1fr 40px;
  padding-top: 24px;
  padding-bottom: 20px;
  place-items: center;
  height: ${pageHeaderHeight}px;
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.G30};
`

const StyledPrevButton = styled(PrevButton)`
  grid-column: 1 / 2;
  place-self: center start;
  margin-left: 11px;
`

const Title = styled.span`
  grid-column: 2 / 3;
  ${({ theme }) => theme.typo.H75R}
  color: ${({ theme }) => theme.color.G70};
`
