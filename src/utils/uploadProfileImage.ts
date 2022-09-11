import { userService } from '@/services'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export default async function uploadProfileImage(file: File) {
  const fileName = file.name
  const fileType = file.type
  const extension = fileName.split('.').pop()
  const uniqueFileName = `${uuidv4()}.${extension}`

  const fileSize = file.size / 1024 / 1024
  if (fileSize > 5) {
    window.alert('5MB 이하의 이미지를 업로드해 주십시오.')
    return
  }

  const uploadUrl = await userService.getProfileImageUploadUrl(
    uniqueFileName,
    fileType
  )

  // // 굳이 바이트스트림으로 변환 안해줘도 파일객체 보내면 axios가 알아서 변환해줌
  // const fileStream = await readFileAsync(file)

  await axios.put(uploadUrl, file, {
    headers: {
      // 헤더에 명시해야 signiture 에러 나지 않음.
      'Content-Type': fileType,
      // URL에 있더라도 header에도 x-amz-acl 설정해줘야 signiture 에러 안남.
      // https://aboutweb.dev/blog/signaturedoesnotmatch-s3-direct-upload/
      'x-amz-acl': 'public-read',
    },
  })

  const uploadedUrl = `https://kr.object.ncloudstorage.com/${process.env.NEXT_PUBLIC_STORAGE_BUCKET}/profile/${uniqueFileName}`

  return uploadedUrl
}
