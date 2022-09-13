import Button from '@/components/ui/buttons/Button'
import ConfirmModal from '@/components/ui/Modals/ConfirmModal'
import UnderlinedTitle from '@/components/ui/titles/UnderlinedHeading'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

const MypageReviewItem = () => {
  const [isMenuOpened, setMenuOpened] = useState(false)
  const [isDeleteModalOpened, setDeleteModalOpened] = useState(false)

  const handleMenuClicked = (action: 'edit' | 'delete') => {
    setMenuOpened(false)

    switch (action) {
      case 'edit':
        break
      case 'delete':
        setDeleteModalOpened(true)
        break
    }
  }

  const handleDelete = () => {}

  return (
    <>
      <Article>
        <Header>
          <ChannelInfo>
            <Image
              src="/images/examples/bookmark-image.png"
              width={40}
              height={40}
              alt="속삭이는 몽자 채널사진"
            />
            <LeftTextInfo>
              <div style={{ display: 'flex', gap: '4px' }}>
                <ChannelTitle>속삭이는 몽자 (1000+)</ChannelTitle>
                <Rating>
                  <Image src="/images/star.svg" width={12} height={12} alt="별" />
                  <span>4.5</span>
                </Rating>
              </div>
              <ChannelCounts>
                <span>구독자 227만명</span>・<span>동영상 1.1천개</span>
              </ChannelCounts>
            </LeftTextInfo>
          </ChannelInfo>
          <RightTextInfo>
            <Keywords>
              <Keyword>슈카월드</Keyword>
              <Keyword>패셔니스타</Keyword>
            </Keywords>
          </RightTextInfo>
          <MoreAction>
            <MoreActionButton
              aria-label={`속삭이는 몽자 채널 리뷰...`}
              aria-controls={`channelid-menu`}
              onClick={() => setMenuOpened(true)}
            >
              <Image
                src="/images/three-dots-wide-space.svg"
                layout="fill"
                alt="3개의 점 아이콘"
              />
            </MoreActionButton>
            {isMenuOpened && (
              <>
                <TransparentBackdrop onClick={() => setMenuOpened(false)} />
                <MenuList id={`channelid-menu`} role="menu">
                  <MenuItem
                    role="menuitem"
                    onClick={() => handleMenuClicked('edit')}
                  >
                    수정
                  </MenuItem>
                  <MenuItem
                    role="menuitem"
                    onClick={() => handleMenuClicked('delete')}
                  >
                    삭제
                  </MenuItem>
                </MenuList>
              </>
            )}
          </MoreAction>
        </Header>
        <Review>
          <div>
            <Title level="h3" align="center">
              가볍게 다양한 주제의 맥락을 파악할 수 있는 채널
            </Title>
            <Paragraph>
              유튜브, 방송 등 대중을 대상으로 하는 업의 핵심 재능은 어려운 이야기를
              쉽게 풀어주는 것이겠죠. 슈카는 이런 면에서 재치있고, 핵심을 관통하는
              주제를 배경스토리부터 시작해서 중심주제로 가는 전략을 구사합니다.
              슈카는 유명해지기 전에도 스스로...
            </Paragraph>
            <DetailButton>자세히 보기</DetailButton>
          </div>
          <Footer>
            <ArticleCounts>
              <Button>
                <Image
                  src="/images/thumbs-up.svg"
                  width={16}
                  height={16}
                  alt="종아요"
                  style={{ marginRight: 2 }}
                />
                <Count>100</Count>
              </Button>
              <Link href="/review/view/1111">
                <a>
                  <Image
                    src="/images/message.svg"
                    width={20}
                    height={20}
                    alt="댓글"
                    style={{ marginBottom: -1 }}
                  />
                  <Count>100</Count>
                </a>
              </Link>
            </ArticleCounts>
            <RegDate>2022-07-01 작성</RegDate>
          </Footer>
        </Review>
      </Article>
      <ConfirmModal
        isOpen={isDeleteModalOpened}
        onClose={() => setDeleteModalOpened(false)}
        onConfirm={() => handleDelete()}
        confirmLabel="삭제"
        closeLabel="닫기"
        message={`리뷰를 삭제하시면 복구가 불가합니다.<br />삭제하시겠습니까?`}
      />
    </>
  )
}
export default MypageReviewItem

const Article = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 331px;
  background: ${({ theme }) => theme.color.G0};
  border-radius: 12px;
`

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 18px 18px 15px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.color.G30};
`

const MoreAction = styled.div`
  position: absolute;
  top: 9px;
  right: 10px;
`
const MoreActionButton = styled(Button)`
  width: 20px;
  height: 20px;
`

const TransparentBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1010;
`

const MenuList = styled.div`
  position: absolute;
  right: -10px;
  top: -19px;
  z-index: 1020;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05), 0px 4px 12px rgba(0, 0, 0, 0.1);
`

const MenuItem = styled(Button)`
  width: 125px;
  height: 46px;
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G60};
  background: ${({ theme }) => theme.color.G0};

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.G40};
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const LeftTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const ChannelTitle = styled.b`
  ${({ theme }) => theme.typo.P100B}
  color: ${({ theme }) => theme.color.G100};
`

const ChannelCounts = styled.span`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G50};
`

const RightTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Rating = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.color.G40};
  border-radius: 35px;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: -0.5px;
    line-height: 16px;
    width: 16px;
  }
`

const Keywords = styled.ul`
  display: flex;
  align-self: flex-end;
  gap: 5px;
`

const Keyword = styled.li`
  ${({ theme }) => theme.typo.P50R}
  color: ${({ theme }) => theme.color.G60};

  ::before {
    content: '#';
  }
`

const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 23px 18px 18px 18px;
`

const Title = styled(UnderlinedTitle)`
  ${({ theme }) => theme.typo.H50B}
  color: ${({ theme }) => theme.color.G100};
`

const Paragraph = styled.p`
  margin-top: 23px;
  /* margin-bottom: 5px; */
  ${({ theme }) => theme.typo.P200R}
  color: ${({ theme }) => theme.color.G60};
`

const DetailButton = styled(Button)`
  ${({ theme }) => theme.typo.P50M}
  color: ${({ theme }) => theme.color.PP600};
`

const ArticleCounts = styled.div`
  display: flex;
  gap: 11px;

  button,
  a {
    display: flex;
    align-items: center;
  }
`

const Count = styled.span`
  ${({ theme }) => theme.typo.PE50}
  color: ${({ theme }) => theme.color.G50D};
`

const RegDate = styled.span`
  ${({ theme }) => theme.typo.P50R}
  color:${({ theme }) => theme.color.G30D};
`
