export interface AppUser {
  nickname: string
  pictureUrl: string
  isLoggedIn: boolean
}

export type UserQuitReason = {
  id: number
  label: string
}

export type UserQuitFormData = {
  account: string
  reason: {
    label: string
    value: number
    desc_required: boolean
  }
  description?: string
}
