import Button from '@/components/ui/buttons/Button'
import Input from '@/components/ui/inputs/Input'
import TextArea from '@/components/ui/inputs/TextArea'
import { resetTextArea } from '@/styles/mixins'
import Image from 'next/image'
import { KeyboardEventHandler, useState } from 'react'
import ReactTextAreaAuthosize from 'react-textarea-autosize'
import styled from 'styled-components'
import MoreOptions from './MoreOptions'

const Comments = () => {
  const [commentTextAreaValue, setCommentTextAreaValue] = useState('')
  const [optionOpened, setOptionOpened] = useState(false)

  return (
    <>
      <CommentArticle>
        <ImageSection>
          <Image
            src="/images/examples/review-profile2.png"
            layout="fixed"
            width={32}
            height={32}
            alt={`내가쓴글 프로필사진`}
          />
        </ImageSection>
        <TextSection>
          <Header>
            <BriefInfo>
              <span>내가쓴글</span>
              <span>2022-07-01</span>
            </BriefInfo>
            <MoreButton onClick={() => setOptionOpened(true)}>
              <Image
                src="/images/three-dots.svg"
                layout="fill"
                alt={`내가쓴글의 댓글을...`}
              />
            </MoreButton>
          </Header>
          <Content>
            사랑해요 슈카 사랑해요 슈카 사랑해요 사랑해요 슈카 사랑해요 슈카 사랑해요
            사랑해요 슈카 사랑해요 슈카 사랑해요 사랑해요 슈카 사랑해요 슈카 사랑해요
          </Content>
        </TextSection>
      </CommentArticle>
      <CommentArticle>
        <ImageSection>
          <Image
            src="/images/examples/review-profile.png"
            layout="fixed"
            width={32}
            height={32}
            alt={`user1 프로필사진`}
          />
        </ImageSection>
        <TextSection>
          <Header>
            <BriefInfo>
              <span>user1</span>
              <span>2022-07-01</span>
            </BriefInfo>
            <MoreButton onClick={() => setOptionOpened(true)}>
              <Image
                src="/images/three-dots.svg"
                layout="fill"
                alt={`user1의 댓글을...`}
              />
            </MoreButton>
          </Header>
          <Content>
            사랑해요 슈카 사랑해요 슈카 사랑해요 사랑해요 슈카 사랑해요 슈카 사랑해요
            사랑해요 슈카 사랑해요 슈카 사랑해요 사랑해요 슈카 사랑해요 슈카 사랑해요
          </Content>
        </TextSection>
      </CommentArticle>
      <CommentArticle>
        <ImageSection>
          <Image
            src="/images/examples/review-profile.png"
            layout="fixed"
            width={32}
            height={32}
            alt={`user1 프로필사진`}
          />
        </ImageSection>
        <TextSection>
          <Header>
            <BriefInfo>
              <span>user1</span>
              <span>2022-07-01</span>
            </BriefInfo>
            <MoreButton onClick={() => setOptionOpened(true)}>
              <Image
                src="/images/three-dots.svg"
                layout="fill"
                alt={`user1의 댓글을...`}
              />
            </MoreButton>
          </Header>
          <Content>
            사랑해요 슈카 사랑해요 슈카 사랑해요 사랑해요 슈카 사랑해요 슈카 사랑해요
            사랑해요 슈카 사랑해요 슈카 사랑해요 사랑해요 슈카 사랑해요 슈카 사랑해요
          </Content>
        </TextSection>
      </CommentArticle>
      <CommentArticle>
        <ImageSection>
          <Image
            src="/images/examples/review-profile2.png"
            layout="fixed"
            width={32}
            height={32}
            alt={`내가쓴글 프로필사진`}
          />
        </ImageSection>
        <TextSection>
          <Header>
            <BriefInfo>
              <span>내가쓴글</span>
              <span>2022-07-01</span>
            </BriefInfo>
            <MoreButton onClick={() => setOptionOpened(true)}>
              <Image
                src="/images/three-dots.svg"
                layout="fill"
                alt={`내가쓴글의 댓글을...`}
              />
            </MoreButton>
          </Header>
          <Content>
            사랑해요 슈카 사랑해요 슈카 사랑해요 사랑해요 슈카 사랑해요 슈카 사랑해요
            사랑해요 슈카 사랑해요 슈카 사랑해요 사랑해요 슈카 사랑해요 슈카 사랑해요
          </Content>
        </TextSection>
      </CommentArticle>
      <WriteComment>
        <ImageSection>
          <Image
            src="/images/examples/review-profile2.png"
            layout="fixed"
            width={32}
            height={32}
            alt={`내가쓴글 프로필사진`}
          />
        </ImageSection>
        <CommentTextArea
          value={commentTextAreaValue}
          placeholder="댓글로 의견을 나눠보세요"
          onChange={(e) => setCommentTextAreaValue(e.currentTarget.value)}
          maxRows={4}
        />
        <CommentSaveButton disabled={!commentTextAreaValue}>등록</CommentSaveButton>
      </WriteComment>
      {optionOpened && (
        <MoreOptions
          onClose={() => setOptionOpened(false)}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      )}
    </>
  )
}
export default Comments

const CommentArticle = styled.article`
  display: flex;
  gap: 14px;
  padding: 17px 0 12px 0;
`

const ImageSection = styled.div`
  height: 100%;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BriefInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  span:nth-of-type(1) {
    ${({ theme }) => theme.typo.P50B}
    color: ${({ theme }) => theme.color.G60D};
  }

  span:nth-of-type(2) {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 10px;
    color: ${({ theme }) => theme.color.G30D};
  }
`

const Content = styled.p`
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G60};
`

const MoreButton = styled(Button)`
  position: relative;
  width: 10px;
  height: 15px;
`

const WriteComment = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 11px;
  position: sticky;
  bottom: 0;
  padding: 6px 0;
  background: ${({ theme }) => theme.color.G0};
`

const CommentTextArea = styled(ReactTextAreaAuthosize)`
  ${resetTextArea}

  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G70D};

  margin: 6px 0;

  ::placeholder {
    color: ${({ theme }) => theme.color.G30D};
  }
`

const CommentSaveButton = styled(Button)`
  ${({ theme }) => theme.typo.P100B}
  color: ${({ theme }) => theme.color.PB600};

  width: 27px;
  height: 17px;

  align-self: end;
  margin-bottom: 10px;

  :disabled {
    color: ${({ theme }) => theme.color.G50};
  }
`
