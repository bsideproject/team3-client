import { useRouter } from 'next/router'

const ReviewAddPage = () => {
  const router = useRouter()

  return <div>{router.query.channelSeq} 리뷰 작성 페이지</div>
}
export default ReviewAddPage
