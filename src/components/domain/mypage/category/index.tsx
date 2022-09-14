import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import A11yElement from '@/components/ui/titles/A11yElement'
import styled, { css } from 'styled-components'
import CategoryList from './CategoryList'

const MypageCategory = () => {
  return (
    <>
      <A11yElement as="h1">카테고리 관리</A11yElement>
      <StyledGrid darker>
        <Paragraph>
          당신에게 어울리는 채널 추천을 위해서 원하는 카테고리를 추가 혹은 변경
          해주세요.
          <br />
          <MinCount>최소 3개</MinCount>
        </Paragraph>
      </StyledGrid>
      <StyledGrid>
        <CategoryListSection>
          <A11yElement as="h2">카테고리 선택</A11yElement>
          <CategoryList />
        </CategoryListSection>
      </StyledGrid>
    </>
  )
}
export default MypageCategory

const StyledGrid = styled(GridContainer)<{ darker?: boolean }>`
  ${({ darker, theme }) =>
    darker &&
    css`
      background: ${theme.color.G30};
    `}
`

const Paragraph = styled.p`
  grid-column: 1 / -1;
  padding: 31px 0;
  ${({ theme }) => theme.typo.P200B}
  color: ${({ theme }) => theme.color.G100};
`

const MinCount = styled.em`
  ${({ theme }) => theme.typo.P200R}
  font-style: normal;

  ::before {
    content: '(';
  }

  ::after {
    content: ')';
  }
`

const CategoryListSection = styled.section`
  grid-column: 1 / -1;
`
