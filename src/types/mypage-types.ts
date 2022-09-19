export type EditProfileFormValue = {
  profileImageUrl: string
  nickname: string
  gender: 'M' | 'F'
  birthYear: number
}

export type MypageUserInfo = {
  birthYear: number
  commentsCount: number
  nickname: string
  profileImageUrl: string
  reviewsCount: number
  gender: 'M' | 'F'
}
