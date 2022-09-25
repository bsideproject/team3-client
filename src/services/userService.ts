import { EditProfileFormValue, MypageUserInfo } from './../types/mypage-types'
import OnboardingStore from '@/stores/OnboardingStore'
import { AppUser, UserQuitFormData, UserQuitReason } from '@/types/user-types'
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

type QuitUserRequestBody = {
  quit_reason_id: number
  quit_reason_text?: string // 이것이 불편한점 상세 적는것. UserQuitReasonListResponseBody의 것과 혼동하지 않기로 하자
}

//********************* Response Body ************************

type UserResponseBody = {
  nickname: string
  pictureUrl: string
  isLoggedIn: boolean
}

type MypageUserResponseBody = {
  birthday: string
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

type UserQuitReasonListResponseBody = Array<{
  id: number
  quit_reason_name: string
  desc_required: 0 | 1
}>

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
    birthYear: Number(response.birthday),
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
  return await commonClient.post('/updateUserCategories', categories)
}

export async function getUserQuitReasonList() {
  const response: UserQuitReasonListResponseBody = await commonClient.get(
    '/user/quit/reasonList'
  )

  const data: UserQuitReason[] = response.map((item) => ({
    id: item.id,
    label: item.quit_reason_name,
    desc_required: item.desc_required === 0 ? false : true,
  }))

  return data
}

export async function quitUser(userQuitFormData: UserQuitFormData) {
  const requestBody: QuitUserRequestBody = {
    quit_reason_id: userQuitFormData.reason.value,
    quit_reason_text: userQuitFormData.description,
  }

  return await commonClient.post('/user/quit/quitUser', requestBody)
}
