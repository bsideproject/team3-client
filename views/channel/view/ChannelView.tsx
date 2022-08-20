import { GridContainer } from '@/components/layout/container-layout/ContentContainer'
import { a11yHidden, borderGradient } from '@/styles/mixins'
import Image from 'next/image'
import styled, { createGlobalStyle } from 'styled-components'

const ChannelView = () => {
  return (
    <>
      <AdditionalGlobalStyle />
      <BackgroundWrapper>
        <Background url="/images/examples/channel-background.png" />
      </BackgroundWrapper>

      <StyledGrid>
        <ChannelInfoSection>
          <ChannelInfoWrapper>
            <ChannelInfoTitle>채널 정보</ChannelInfoTitle>
            <ChannelInfo>
              <ChannelImageWrapper>
                <Image
                  src="/images/examples/channel-image.png"
                  width={80}
                  height={80}
                  alt="채널 이미지"
                  style={{ borderRadius: '50%' }}
                />
              </ChannelImageWrapper>
              <ChannelName>
                미야옹철의 냥냥펀치
                <Image
                  src="/images/youtube-inverted-round.svg"
                  width={20}
                  height={20}
                  alt="유튜브 아이콘"
                />
              </ChannelName>
              <NemericalData>
                <span>구독자 227만명</span> 𐄁 <span>동영상 1.1천개</span>
              </NemericalData>
              <Description>
                반려묘 행동 전문 수의사 김명철이 들려주는 현실 집사 이야기
                <br />
                Cat president&apos;s Cat talk
              </Description>
              <UpdateDate>
                <span>2022.06.30</span>
                {` `}
                <span>업데이트</span>
              </UpdateDate>

              <Specification>
                <Category>
                  <span>지식</span>
                  <span>사회</span>
                </Category>
                <Keyword>
                  <span>슈카월드</span>
                  <span>패셔니스타</span>
                </Keyword>
              </Specification>
            </ChannelInfo>
          </ChannelInfoWrapper>
        </ChannelInfoSection>

        <ChannelReviewSection>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </ChannelReviewSection>
      </StyledGrid>
    </>
  )
}
export default ChannelView

const AdditionalGlobalStyle = createGlobalStyle`
	html {
		background: ${({ theme }) => theme.color.G30};
	}
`

const StyledGrid = styled(GridContainer)``

const backgroundHeight = 219

const BackgroundWrapper = styled.div`
  position: relative;
  z-index: -1;
  height: ${backgroundHeight}px;
  clip-path: inset(0);
`

const Background = styled.div<{ url: string }>`
  position: fixed;
  display: block;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: var(--content-width, 100%);
  height: ${backgroundHeight}px;
  background: url(${({ url }) => url}) no-repeat center / cover;
  /* background-size: auto;
  background-position: top center;
  background-attachment: fixed; */
`

const ChannelInfoSection = styled.section`
  grid-column: 1 / -1;
  background: ${({ theme }) => theme.color.background};
  border-radius: 12px;
  margin-top: -56px;
`

const ChannelReviewSection = styled.section``

const ChannelInfoWrapper = styled.div``

const ChannelInfoTitle = styled.h2`
  ${a11yHidden}
`

const ChannelInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChannelImageWrapper = styled.span`
  margin-top: -35px;
`

const ChannelName = styled.b`
  display: flex;
  align-items: center;
  gap: 5px;
  ${({ theme }) => theme.typo.H100B}
  color: ${({ theme }) => theme.color.G100};
  margin-top: 4px;
`

const NemericalData = styled.span`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50D};
  margin-top: 3px;
`

const Description = styled.span`
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G100};
  text-align: center;
  margin-top: 24px;
`

const UpdateDate = styled.span`
  color: ${({ theme }) => theme.color.G30D};
  font-size: 8px;
  line-height: 16px;
  font-weight: 400;
  margin-top: 24px;

  span:nth-of-type(1) {
    font-family: 'Roboto' sans-serif;
  }
  span:nth-of-type(2) {
    font-family: 'Noto Sans KR' sans-serif;
    letter-spacing: -0.5px;
  }
`

const Specification = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.G30};
  margin-top: 8px;
  padding: 17px 0 19px 0;
`

const Category = styled.span`
  display: flex;
  gap: 2px;
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};

  span {
    ${borderGradient(1)}
    padding: 1px 7px;
    border-radius: 69px;
  }
`

const Keyword = styled.span`
  display: flex;
  gap: 5px;

  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};

  span::before {
    content: '#';
  }
`
