import Image from 'next/image'
import styled from 'styled-components'
import InconspicuousLink from './InconspicuousLink'

type Props = {
  className?: string
  to?: string
  children: string
  noIcon?: boolean
}

const GuideLink = ({ className, to, children, noIcon }: Props) => {
  return (
    <Link
      className={className}
      href={to}
      target="_blank"
      rel="noreferrer noopener nofollow"
    >
      {!noIcon && (
        <Image
          src="/images/circle-question-mark-filled.svg"
          width={19}
          height={19}
          alt="물음표 마크"
        />
      )}

      {children}
    </Link>
  )
}
export default GuideLink

const Link = styled.a`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.P100M}
  color: ${({ theme }) => theme.color.G60};
`
