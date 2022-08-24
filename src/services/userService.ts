import OnboardingStore from '@/stores/OnboardingStore'
import { AppUser } from '@/types/userTypes'
import axios from 'axios'
import commonClient from './clients/commonClient'

//********************* Props ********************************

type RegisterProps = Pick<
  OnboardingStore,
  | 'providerToken'
  | 'termsAgreements'
  | 'nickname'
  | 'profileImageUrl'
  | 'sex'
  | 'birthYear'
  | 'categories'
>

//********************* Request Body *************************

interface RegisterRequestBody {
  terms_agreement: 'Y' | 'N'
  nickname: string
  profile_img: string
  sex: 'M' | 'F'
  birthday: number
  category: Array<string>
}

//********************* Response Body ************************

interface UserResponseBody {
  nickname: string
  pictureUrl: string
  isLoggedIn: boolean
}

//********************* Method *******************************

export async function getJwtToken(providerToken: string) {
  return await axios.post(
    '/api/token/getToken',
    {},
    { headers: { Authorization: providerToken } }
  )
}

export async function getUser() {
  const user: UserResponseBody = await commonClient.get('/getUserInfo')
  return user as AppUser
}

// 파라미터 값 변환은 오로지 서비스에서만
export async function register({
  providerToken,
  termsAgreements,
  nickname,
  profileImageUrl,
  sex,
  birthYear,
  categories,
}: RegisterProps) {
  if (!profileImageUrl || !sex || !birthYear) {
    throw new Error('입력값이 충분하지 않습니다: user.register')
  }

  const requestBody: RegisterRequestBody = {
    terms_agreement: termsAgreements.every((term) => term.checked) ? 'Y' : 'N',
    nickname: nickname,
    profile_img: profileImageUrl,
    sex: sex,
    birthday: birthYear,
    category: categories,
  }

  await commonClient.post('/onboarding', requestBody, {
    headers: { Authorization: providerToken as string },
  })

  return await getJwtToken(providerToken as string)
}

export async function getProfileImageUploadUrl(fileName: string, mime: string) {
  const result = await axios.get(
    `/api/upload/presignedUrl?objectKey=${encodeURI(
      'profile/' + fileName
    )}&mime=${encodeURI(mime)}`
  )
  return result.data.url
}
