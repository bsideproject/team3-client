import { resetButton } from '@/styles/mixins'
import Image from 'next/image'
import styled from 'styled-components'

export const Button = styled.button`
  ${resetButton}
`
export const IconButton = styled(Button)`
  width: 24px;
  height: 24px;
`

export const PrevButton = ({ ...props }) => (
  <IconButton aria-label="이전 단계로" {...props}>
    <Image
      src="/images/chevron_left.svg" // Route of the image file
      alt="왼쪽을 가리키는 V형 무늬"
      width={24}
      height={24}
    />
  </IconButton>
)
