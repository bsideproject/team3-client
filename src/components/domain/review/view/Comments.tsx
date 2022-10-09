import Button from '@/components/ui/buttons/Button'
import Input from '@/components/ui/inputs/Input'
import TextArea from '@/components/ui/inputs/TextArea'
import { useUser } from '@/hooks/queries/user/userQueries'
import { reviewService } from '@/services'
import { resetTextArea } from '@/styles/mixins'
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import moment from 'moment'
import Image from 'next/image'
import Router from 'next/router'
import { KeyboardEventHandler, useEffect, useState } from 'react'
import ReactTextAreaAuthosize from 'react-textarea-autosize'
import styled from 'styled-components'
import MoreOptions from './MoreOptions'

type Props = {
  reviewSeq: number
}

const Comments = ({ reviewSeq }: Props) => {
  const [commentTextAreaValue, setCommentTextAreaValue] = useState('')
  const [optionOpened, setOptionOpened] = useState(false)

  const user = useUser()
  const queryClient = useQueryClient()

  const { data, fetchNextPage } = useInfiniteQuery(
    ['review-comments', reviewSeq],
    ({ pageParam = 0 }) =>
      reviewService.getReviewCommentList({
        reviewId: reviewSeq,
        page: pageParam,
        size: 15,
      }),
    {
      getNextPageParam: (lastPage, allPages) => lastPage.page + 1,
    }
  )

  const { mutate: mutateToAdd } = useMutation(reviewService.addReviewComment, {
    onSuccess: (data) => {
      setCommentTextAreaValue('')
      queryClient.invalidateQueries(['review-details', reviewSeq])
      queryClient.invalidateQueries(['review-comments', reviewSeq])
    },
    onError: (error) => {
      console.error(error)
      window.alert(error)
    },
  })

  const { mutate: mutateToDelete } = useMutation(reviewService.removeReviewComment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['review-comments', reviewSeq])
    },
    onError: (error) => {
      console.error(error)
      window.alert(error)
    },
  })

  const promptLoginConfirm = () => {
    if (window.confirm('로그인 후 이용 가능합니다. 로그인 하시겠습니까?')) {
      Router.push('/launch')
    }
  }

  const handleCommentSubmit = () => {
    mutateToAdd({ reviewId: reviewSeq, comment_body: commentTextAreaValue })
  }

  useEffect(() => {
    const scrollEventHandler = () => {
      const documentElement = document.documentElement

      const extra = 100

      const bottom =
        documentElement.scrollHeight - documentElement.scrollTop <
        documentElement.clientHeight + extra
      if (bottom) {
        fetchNextPage()
      }
    }

    window.addEventListener('scroll', scrollEventHandler)

    return () => window.removeEventListener('scroll', scrollEventHandler)
  }, [fetchNextPage])

  return (
    <>
      {data?.pages.map((page) =>
        page.content.map((comment) => (
          <CommentArticle key={comment.id}>
            <ImageSection>
              <Image
                src={comment.user_info.profile_img}
                layout="fixed"
                width={32}
                height={32}
                alt={`${comment.user_info.nickname} 프로필사진`}
                style={{ borderRadius: '50%' }}
              />
            </ImageSection>
            <TextSection>
              <Header>
                <BriefInfo>
                  <span>{comment.user_info.nickname}</span>
                  <span>{moment(comment.created_date).format('YYYY-MM-DD')}</span>
                </BriefInfo>
                <MoreButton onClick={() => setOptionOpened(true)}>
                  <Image
                    src="/images/three-dots.svg"
                    width={10}
                    height={15}
                    alt={`내가쓴글의 댓글을...`}
                  />
                </MoreButton>
                {optionOpened && (
                  <MoreOptions
                    onClose={() => setOptionOpened(false)}
                    onEdit={() => {}}
                    onDelete={() => {
                      mutateToDelete({ reviewId: reviewSeq, commentId: comment.id })
                    }}
                  />
                )}
              </Header>
              <Content>{comment.comment_body}</Content>
            </TextSection>
          </CommentArticle>
        ))
      )}
      {/* <CommentArticle>
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
      </CommentArticle> */}
      <WriteCommentWrapper>
        <WriteComment>
          <ImageSection>
            <Image
              src={
                user?.isLoggedIn
                  ? (user?.pictureUrl as string)
                  : '/images/person-icon.jpg'
              }
              layout="fixed"
              width={32}
              height={32}
              alt={`내 프로필사진`}
              style={{ borderRadius: '50%' }}
            />
          </ImageSection>
          <CommentTextArea
            value={commentTextAreaValue}
            placeholder={
              user?.isLoggedIn
                ? '댓글로 의견을 나눠보세요'
                : '로그인 후 이용 가능합니다.'
            }
            onChange={(e) => setCommentTextAreaValue(e.currentTarget.value)}
            maxRows={4}
            onClick={() => !user?.isLoggedIn && promptLoginConfirm()}
          />
          <CommentSaveButton
            disabled={!commentTextAreaValue}
            onClick={() =>
              !user?.isLoggedIn ? promptLoginConfirm() : handleCommentSubmit()
            }
          >
            등록
          </CommentSaveButton>
        </WriteComment>
      </WriteCommentWrapper>
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
  flex: 1;
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

const Content = styled.pre`
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G60};
`

const MoreButton = styled(Button)`
  position: absolute;
  right: 0;
  width: 20px;
  height: 15px;
`

const WriteCommentWrapper = styled.div`
  position: sticky;
  bottom: 0;
  height: 60px;
`

const WriteComment = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 11px;

  padding: 6px 0;
  background: ${({ theme }) => theme.color.G0};

  border-top: 1px solid ${({ theme }) => theme.color.G30};
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
