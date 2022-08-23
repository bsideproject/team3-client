import { NextApiRequest, NextApiResponse } from 'next'
import AWS from 'aws-sdk'

// v3에서 Endpoint 객체 어느 패키지에 있는지 찾지 못해서 사용못함
// 일단은 v2 이용. 네이버클라우드 측에서 v3에 대한 예제 업데이트 및 Endpoint 가이드가 나오면
// 그때 업그레이드 작업을 하도록 하자.
// https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/s3/@/s3_get_presignedURL.js
// https://guide.ncloud-docs.com/docs/storage-storage-8-4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(400).send({ message: 'GET 요청만 보내주십시오.' })
  }

  const { objectKey, mime } = req.query

  const s3Client = new AWS.S3({
    endpoint: new AWS.Endpoint('https://kr.object.ncloudstorage.com'),
    region: 'kr-standard',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  })

  const Bucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET
  const Key = `${objectKey}`

  const url = await s3Client.getSignedUrlPromise('putObject', {
    Bucket,
    Key,
    ContentType: mime,
    Expires: 300,
    ACL: 'public-read',
  })

  res.send({ url })
}
