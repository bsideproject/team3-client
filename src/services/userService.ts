import { EditProfileFormValue, MypageUserInfo } from './../types/mypage-types'
import OnboardingStore from '@/stores/OnboardingStore'
import { AppUser } from '@/types/user-types'
import axios from 'axios'
import commonClient from './clients/commonClient'

//********************* Request Body *************************

type RegisterRequestBody = {
  terms_agreement: 'Y' | 'N'
  nickname: string
  profile_img: string
  sex: 'M' | 'F'
  birthday: number
  category: Array<number>
}

type EditUserRequestBody = {
  birthday: number
  nickname: string
  profile_img: string
  sex: 'M' | 'F'
}

type EditUserCategoryRequestBody = number[]
//********************* Response Body ************************

type UserResponseBody = {
  nickname: string
  pictureUrl: string
  isLoggedIn: boolean
}

type MypageUserResponseBody = {
  birthday: number
  comment_count: number
  nickname: string
  picture_url: string
  review_count: number
  sex: 'M' | 'F'
  // user_badge: string
}

type EditUserResponseBody = {
  birthday: number
  comment_count: number
  nickname: string
  picture_url: string
  review_count: number
  sex: 'M' | 'F'
  // user_badge: string
}

//********************* Method *******************************

export async function getJwtToken(providerToken: string) {
  await axios.post(
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
}: OnboardingStore) {
  if (!profileImageUrl || !sex || !birthYear) {
    throw new Error('입력값이 충분하지 않습니다: user.register')
  }

  const requestBody: RegisterRequestBody = {
    terms_agreement: termsAgreements.every((term) => term.checked) ? 'Y' : 'N',
    nickname: nickname,
    profile_img: profileImageUrl,
    sex: sex,
    birthday: birthYear,
    category: categories.map((category) => category.id),
  }

  await commonClient.post('/onboarding', requestBody, {
    headers: { Authorization: providerToken as string },
  })

  return await getJwtToken(providerToken as string)
}

export async function editUser(formValue: EditProfileFormValue) {
  const requestBody: EditUserRequestBody = {
    birthday: formValue.birthYear,
    nickname: formValue.nickname,
    profile_img: formValue.profileImageUrl,
    sex: formValue.gender,
  }

  const response: EditUserResponseBody = await commonClient.post(
    '/changeUserInfo',
    requestBody
  )

  return response
}

export async function getProfileImageUploadUrl(fileName: string, mime: string) {
  const result = await axios.get(
    `/api/upload/presignedUrl?objectKey=${encodeURI(
      'profile/' + fileName
    )}&mime=${encodeURI(mime)}`
  )
  return result.data.url
}

export async function getMypageUserInfo() {
  const response: MypageUserResponseBody = await commonClient.get('/getMypageInfo')

  const data: MypageUserInfo = {
    birthYear: response.birthday,
    commentsCount: response.comment_count,
    nickname: response.nickname,
    profileImageUrl: response.picture_url,
    reviewsCount: response.review_count,
    gender: response.sex,
  }

  return data
}

export async function getUserCategory() {
  const response: number[] = await commonClient.get('/getUserCategories')

  return response
}

export async function editUserCategory(categories: number[]) {
  await commonClient.post('/updateUserCategories', categories)
}
