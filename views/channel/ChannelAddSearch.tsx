import PageHeader from '@/components/ui/headers/PageHeader'
import LightSelect from '@/components/ui/inputs/LightSelect'
import SearchInput from '@/components/ui/inputs/SearchInput'
import InputWithLabel from '@/components/ui/inputs/InputWithLabel'
import { useState } from 'react'
import UnderlinedInput from '@/components/ui/inputs/UnderlinedInput'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import styled from 'styled-components'
import Image from 'next/image'
import { ChannelInfoType } from '@/pages/channel/add/[step]'
import ChannelInfo from '@/components/ui/ChannelInfo'
import ConfirmButton from '@/components/ui/buttons/ConfirmButton'
import ConfirmButtonLight from '@/components/ui/buttons/ConfirmButtonLight'
import Router from 'next/router'

type Props = {
  selectedChannel?: ChannelInfoType
  onSelectChannel: (channel: ChannelInfoType) => void
}

const ChannelAddSearch = ({ selectedChannel, onSelectChannel }: Props) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [channelSearchResult, setChannelSearchResult] = useState<ChannelInfoType>({
    id: '1',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AMLnZu-jc4vUVPIqTYKMtdr4q4LPZiPDiy4gIRt9fDXiUQ=s176-c-k-c0x00ffffff-no-rj',
    name: '속삭이는몽자',
    subscribersCount: 816000,
  })

  const handleSearchUrl = (url: string | undefined) => {}

  const handleChannelSelect = (selectedChannel: ChannelInfoType) => {
    onSelectChannel && onSelectChannel(selectedChannel)
  }

  const isChannelSelected = channelSearchResult === selectedChannel

  return (
    <>
      <StyledGrid>
        <Title>나만 알기 아까운 채널 여기에 공유해요!</Title>
        <ForBeginner>
          <Image
            src="/images/circle-question-mark.svg"
            width={15}
            height={15}
            alt="물음표 마크"
          />
          채널 등록이 처음이라면
        </ForBeginner>
        <SearchUrlContainer>
          <InputWithLabel
            labelName="영상 링크(Url)"
            renderInput={(id, isError) => (
              <SearchInput
                id={id}
                isError={isError}
                placeholder="유튜브 채널 혹은 영상의 링크를 입력해주세요!"
                onSearch={handleSearchUrl}
              />
            )}
            errorMessage={errorMsg}
          />
        </SearchUrlContainer>
        <StyledChannelInfo
          channelInfo={channelSearchResult}
          onClick={() => handleChannelSelect(channelSearchResult)}
          isSelected={isChannelSelected}
        />
        {/* <button onClick={handleErrorToggle} style={{ marginBottom: '30px' }}>
        {errorMsg ? '에러제거' : '에러발생'}
      </button>
      <div style={{ width: '100%', padding: '16px' }}>
        <InputWithLabel
          labelName="테스트"
          renderInput={(id, isError) => (
            <SearchInput
              id={id}
              isError={isError}
              placeholder="내용을 입력해주세요"
              onSearch={(value) => {
                console.log(value)
              }}
            />
          )}
          errorMessage={errorMsg}
        />
        <InputWithLabel
          labelName="채널선택"
          renderInput={(id, isError) => (
            <LightSelect
              id={id}
              instanceId="channel-select"
              placeholder="채널 카테고리를 지정해주세요"
              options={[
                { value: 1, label: '몽자1' },
                { value: 2, label: '몽자2' },
                { value: 3, label: '몽자3' },
                { value: 4, label: '몽자4' },
                { value: 5, label: '몽자5' },
              ]}
              onChange={(selected) => console.log(selected)}
            />
          )}
          errorMessage={errorMsg}
        />
        <UnderlinedInput placeholder="test" value="test" />
      </div> */}
      </StyledGrid>
      <ConfirmButtonLight
        displayText="등록하기"
        disabled={!isChannelSelected}
        onClick={() => {
          Router.push('/channel/add/step02')
        }}
      />
    </>
  )
}
export default ChannelAddSearch

const StyledGrid = styled(GridContainer)`
  grid-template-rows: 13px auto 4px auto 36px auto 20px auto 1fr;
`

const Title = styled.h2`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G100};
`

const ForBeginner = styled.span`
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50};
  display: flex;
  text-decoration: underline;
`

const SearchUrlContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 6 / 7;
`

const StyledChannelInfo = styled(ChannelInfo)`
  grid-column: 1 / -1;
  grid-row: 8 / 9;
`
