import styled from 'styled-components'

export const ContentContainer = styled.div`
  padding: 0 16px;
`

export const GridContainer = styled(ContentContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0 8px;
`
