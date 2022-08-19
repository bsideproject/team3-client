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
    <InconspicuousLink
      className={className}
      href={to}
      target="_blank"
      rel="noreferrer noopener nofollow"
    >
      {!noIcon && (
        <Image
          src="/images/circle-question-mark.svg"
          width={15}
          height={15}
          alt="물음표 마크"
        />
      )}

      {children}
    </InconspicuousLink>
  )
}
export default GuideLink
