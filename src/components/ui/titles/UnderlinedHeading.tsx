import { ReactNode } from 'react'
import styled from 'styled-components'

type Align = 'left' | 'right' | 'center'

type Props = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  align?: Align
  children: ReactNode
}

const UnderlinedTitle = ({
  level = 'h1',
  className,
  align = 'left',
  children,
}: Props) => {
  return (
    <Wrapper align={align}>
      <ContentsArea>
        <Underline />
        <Title as={level} className={className}>
          {children}
        </Title>
      </ContentsArea>
    </Wrapper>
  )
}
export default UnderlinedTitle

const Wrapper = styled.div<{ align: Align }>`
  text-align: ${({ align }) => align};
`

const ContentsArea = styled.div`
  position: relative;
  display: inline-block;
`

const Title = styled.h1`
  position: relative;
`

const expandToX = 2

const Underline = styled.div`
  position: absolute;
  bottom: -1px;
  left: -${expandToX}px;
  width: calc(100% + ${expandToX * 2}px);
  height: 13px;
  background: ${({ theme }) => theme.color.PP100D};
`
