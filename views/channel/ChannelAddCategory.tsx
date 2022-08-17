import ChannelInfo from '@/components/domain/channel/ChannelInfo'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import ConfirmButtonLight from '@/components/ui/buttons/ConfirmButtonLight'
import InputWithLabel from '@/components/ui/inputs/InputWithLabel'
import LightSelect from '@/components/ui/inputs/LightSelect'
import { useCategoryOptionsQuery } from '@/hooks/queryHooks'
import { ChannelInfoType } from '@/pages/channel/add/[step]'
import { Category } from '@/services/rest-api-service/categoryService'
import { borderGradient } from '@/styles/mixins'
import styled from 'styled-components'

type Props = {
  selectedChannel: ChannelInfoType
  selectedCategory: Category | undefined
  onSelectCategory: (category: Category) => void
}

const ChannelAddCategory = ({
  selectedChannel,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  const { data: categoryOptions, isLoading } = useCategoryOptionsQuery()

  const handleSelectCategory = (option: any) => {
    onSelectCategory && onSelectCategory(option.value)
  }

  const isComplete = selectedChannel && selectedCategory

  return (
    <>
      <StyledGrid>
        <Title>
          찾는 채널이 맞다면,
          <br />
          채널 카테고리 입력 후 등록해주세요!
        </Title>
        <StyledChannelInfo channelInfo={selectedChannel} />
        <StyledInputWithLabel
          labelName="카테고리"
          renderInput={(id, isError) => (
            <LightSelect
              id={id}
              instanceId="channel-select"
              placeholder="채널 카테고리를 지정해주세요"
              options={categoryOptions}
              value={selectedCategory && { label: selectedCategory }}
              isLoading={isLoading}
              onChange={handleSelectCategory}
            />
          )}
        />
      </StyledGrid>
      <ConfirmButtonLight displayText="등록하기" disabled={!isComplete} />
    </>
  )
}
export default ChannelAddCategory

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 13px auto 17px auto 40px auto 1fr;
`

const Title = styled.h2`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G100};
`

const StyledChannelInfo = styled(ChannelInfo)`
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  ${borderGradient(
    2,
    ['top', 'bottom', 'left', 'right'],
    'rgba(255, 255, 255, 0.9)'
  )}
`

const StyledInputWithLabel = styled(InputWithLabel)`
  grid-column: 1 / -1;
  grid-row: 6 / 7;
`
