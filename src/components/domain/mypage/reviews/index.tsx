import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import SimpleDropdown from '@/components/ui/dropdowns/SimpleDropdown'
import A11yElement from '@/components/ui/titles/A11yElement'
import { inheritGrid } from '@/styles/mixins'
import { useState } from 'react'
import styled from 'styled-components'
import MypageReviewList from './MypageReviewList'

const MypageReviews = () => {
  const [orderBy, setOrderBy] = useState('최신순')

  return (
    <>
      <A11yElement as="h1">리뷰 관리</A11yElement>
      <StyledGrid>
        <Top>
          <Count>📝 8개 리뷰</Count>
          <OrderByDropdown
            position="right"
            menus={['최신순', '인기순']}
            selectedMenu={orderBy}
            onSelectItem={(selected) => setOrderBy(selected)}
          />
        </Top>
        <StyledMypageLiviewList />
      </StyledGrid>
    </>
  )
}
export default MypageReviews

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 49px auto;
  gap: 17px;
`

const Count = styled.span`
  ${({ theme }) => theme.typo.H50M}
  color: ${({ theme }) => theme.color.G60};
`

const OrderByDropdown = styled(SimpleDropdown)``

const Top = styled.div`
  grid-column: 1 / -1;
  ${inheritGrid}

  ${Count} {
    grid-column: 1 / 4;
    place-self: end start;
  }

  ${OrderByDropdown} {
    grid-column: 4 / 5;
    place-self: end end;
  }
`

const StyledMypageLiviewList = styled(MypageReviewList)`
  grid-column: 1 / -1;
`
