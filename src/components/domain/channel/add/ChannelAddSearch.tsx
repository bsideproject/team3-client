import PageHeader from '@/components/ui/headers/PageHeader'
import LightSelect from '@/components/ui/inputs/LightSelect'
import SearchInput from '@/components/ui/inputs/SearchInput'
import InputWithLabel from '@/components/ui/inputs/InputWithLabel'
import { ChangeEventHandler, useState } from 'react'
import UnderlinedInput from '@/components/ui/inputs/UnderlinedInput'
import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import styled from 'styled-components'
import Image from 'next/image'
import ChannelInfo from '@/components/domain/channel/add/ChannelInfo'
import ConfirmButtonLight from '@/components/ui/buttons/ConfirmButtonLight'
import Router from 'next/router'
import { borderGradient, viewportHeight } from '@/styles/mixins'
import GuideLink from '@/components/ui/links/GuideLink'
import { useChannelVideoUrlSearchQuery } from '@/hooks/queries/channel/channelQueries'
import { ChannelSearchInfo } from '@/types/channel-types'
import GuideLinkGradientBordered from './components/GuideLinkGradientBodered'

type Props = {
  selectedChannel: ChannelSearchInfo | null
  onSelectChannel: (channel: ChannelSearchInfo) => void
}

const ChannelAddSearch = ({ selectedChannel, onSelectChannel }: Props) => {
  const [videoUrl, setVideoUrl] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [channelSearchResult, setChannelSearchResult] =
    useState<ChannelSearchInfo | null>(selectedChannel)

  //  나중에 컴포넌트로 따로 빼서 Suspense Errorboundary 적용하기
  const {
    refetch: refetchChannel,
    isLoading,
    isFetching,
  } = useChannelVideoUrlSearchQuery(videoUrl, {
    onSuccess: (data) => {
      if (data.isRegistered) {
        setErrorMsg('이미 등록된 채널입니다.')
        return
      }

      setChannelSearchResult(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })

  const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setErrorMsg('')

    setVideoUrl(e.currentTarget.value)
  }

  const handleSearchInputClear = () => {
    setVideoUrl('')
  }

  const handleSearchUrl = (videoUrl: string | undefined) => {
    if (!videoUrl) return

    if (!isValidVideoUrl(videoUrl)) {
      setErrorMsg('유효한 링크가 아닙니다.')
      return
    }

    setChannelSearchResult(null)
    refetchChannel()
  }

  const isValidVideoUrl = (videoUrl: string) => {
    const videoUrlPatterns = [
      /^https:\/\/youtu.be\/[A-Za-z0-9_\-]{11}$/,
      /^https:\/\/(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_\-]{11}$/,
    ]

    console.log(videoUrl.split('?')[0])
    return videoUrlPatterns.some((pattern) => pattern.test(videoUrl.split('&')[0]))
  }

  const handleChannelSelect = (selectedChannel: ChannelSearchInfo) => {
    onSelectChannel && onSelectChannel(selectedChannel)
  }

  const isChannelSelected =
    selectedChannel !== null && channelSearchResult === selectedChannel

  return (
    <>
      <StyledGrid>
        <Title>나만 알기 아까운 채널 여기에 공유해요!</Title>
        <Paragraph>유튜브 쇼츠 영상 URL로는 채널등록이 불가합니다.</Paragraph>
        <SearchUrlContainer>
          <InputWithLabel
            labelName="영상 링크(Url)"
            renderInput={(id, isError) => (
              <SearchInput
                id={id}
                isError={isError}
                placeholder="유튜브 영상의 링크를 입력해주세요!"
                onSearch={handleSearchUrl}
                value={videoUrl}
                onChange={handleSearchInputChange}
                onClear={handleSearchInputClear}
              />
            )}
            errorMessage={errorMsg}
          />
        </SearchUrlContainer>
        {channelSearchResult && (
          <StyledChannelInfo
            channelInfo={channelSearchResult}
            onClick={() => handleChannelSelect(channelSearchResult)}
            isSelected={isChannelSelected}
          />
        )}
        <Links>
          <GoToYoutubeLink
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferer nofollow"
          >
            <YoutubeIconWrapper>
              <Image
                src="/images/youtube-icon.png"
                layout="fill"
                alt="유튜브 아이콘"
              />
            </YoutubeIconWrapper>
            <span>유튜브 바로가기</span>
          </GoToYoutubeLink>
          <GuideLinkGradientBordered to="https://naver.com">
            채널 등록이 처음이라면
          </GuideLinkGradientBordered>
        </Links>
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
        displayText="다음 단계로"
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
  height: 100%;
`

const Title = styled.h1`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G100};
`

const Paragraph = styled.p`
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};
`

const SearchUrlContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 6 / 7;
`

const StyledChannelInfo = styled(ChannelInfo)`
  grid-column: 1 / -1;
  grid-row: 8 / 9;
`

const YoutubeIconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 6px;
`

const GoToYoutubeLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 80px;
  height: 16px;
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G70};
  text-decoration: underline;
`

const Links = styled.div`
  grid-column: 1 / -1;
  grid-row: 9 / 10;
  place-self: end center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`
