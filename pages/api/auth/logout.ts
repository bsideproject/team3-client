import Cookies from 'cookies'
import { NextApiRequest, NextApiResponse } from 'next'

// v3에서 Endpoint 객체 어느 패키지에 있는지 찾지 못해서 사용못함
// 일단은 v2 이용. 네이버클라우드 측에서 v3에 대한 예제 업데이트 및 Endpoint 가이드가 나오면
// 그때 업그레이드 작업을 하도록 하자.
// https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/s3/src/s3_get_presignedURL.js
// https://guide.ncloud-docs.com/docs/storage-storage-8-4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res)
  cookies.set('access-token', 'deleted', {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 0,
  })
  cookies.set('refresh-token', 'deleted', {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 0,
  })

  res.redirect('/')
}
