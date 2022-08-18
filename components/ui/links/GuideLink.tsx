import Image from 'next/image'
import styled from 'styled-components'

type Props = {
  className?: string
  to: string
  children: string
}

const GuideLink = ({ className, to, children }: Props) => {
  return (
    <Wrapper
      className={className}
      href={to}
      target="_blank"
      rel="noreferrer noopener nofollow"
    >
      <Image
        src="/images/circle-question-mark.svg"
        width={15}
        height={15}
        alt="물음표 마크"
      />
      {children}
    </Wrapper>
  )
}
export default GuideLink

const Wrapper = styled.a`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50};
  display: flex;
  text-decoration: underline;
`
