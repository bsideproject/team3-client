import GuideLink from '@/components/ui/links/GuideLink'
import { borderGradient } from '@/styles/mixins'
import styled from 'styled-components'

const GuideLinkGradientBordered = styled(GuideLink)`
  height: 28px;
  padding: 0 13px 0 10px;
  ${borderGradient(1)}
  border-radius: 52px;
`

export default GuideLinkGradientBordered
