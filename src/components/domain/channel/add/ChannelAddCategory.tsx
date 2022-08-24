import ChannelInfo from '@/components/domain/channel/add/ChannelInfo'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import ConfirmButtonLight from '@/components/ui/buttons/ConfirmButtonLight'
import InputWithLabel from '@/components/ui/inputs/InputWithLabel'
import LightSelect from '@/components/ui/inputs/LightSelect'
import GuideLink from '@/components/ui/links/GuideLink'
import { useCategoryOptionsQuery } from '@/hooks/queries/channel/channelQueries'
import { borderGradient } from '@/styles/mixins'
import { ChannelCategory } from '@/types/categoryTypes'
import { ChannelInfoType } from '@/types/channelTypes'
import Router from 'next/router'
import styled from 'styled-components'

type Props = {
  selectedChannel: ChannelInfoType
  selectedCategory: ChannelCategory | undefined
  onSelectCategory: (category: ChannelCategory) => void
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

  const handleConfirm = () => {
    Router.push('/channel/add/complete')
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
              isLoading={isLoading}
              onChange={handleSelectCategory}
            />
          )}
        />
        <NoChannelGuideLink to="https://naver.com">
          채널이 안보이시나요?
        </NoChannelGuideLink>
      </StyledGrid>
      <ConfirmButtonLight
        displayText="등록하기"
        disabled={!isComplete}
        onClick={handleConfirm}
      />
    </>
  )
}
export default ChannelAddCategory

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 13px auto 17px auto 40px auto 1fr;
  height: 100%;
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

const NoChannelGuideLink = styled(GuideLink)`
  grid-column: 1 / -1;
  grid-row: 7 / 8;
  place-self: end center;
  margin-bottom: 16px;
`
