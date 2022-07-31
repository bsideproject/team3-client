import BasicLayout from '@/components/Layout/BasicLayout'
import { ReactElement } from 'react'
import styled from 'styled-components'

const Launch = () => {
  return (
    <Grid>
      <Ball />
      <Title>서치잇</Title>
    </Grid>
  )
}
export default Launch

const Grid = styled.div`
  ${({ theme }) => theme.grid.mobile}
  grid-template-rows: 381fr 67fr 219fr 41fr 106fr 30fr;
  place-items: end center;
`
const Ball = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  width: 139px;
  height: 138px;
  background: ${({ theme }) => theme.gradient.G100};
  filter: blur(20px);
  border-radius: 50%;
`

const Title = styled.h1`
  ${({ theme }) => theme.typo.H200B}
  grid-column: 1 / 5;
  grid-row: 2 / 3;
`

Launch.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>
}
