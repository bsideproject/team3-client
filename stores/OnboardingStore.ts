import { makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export default class OnboardingStore {
  rootStore: RootStore

  totalProgress: number = 5
  currentProgress: number = 0
  progressTitle: string[] = ['', '']

  providerToken?: string
  email: string = ''
  termsAgreementCheckedArr: Array<boolean> = [false, false]
  nickname: string = ''
  profileImageUrl: string = ''
  sex: undefined | 'M' | 'F' = undefined
  birthday: string = '' // YYYY-MM-DD
  category: string[] = [] // LABEL string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      providerToken: false,
      email: false,
    })
    this.rootStore = rootStore
  }

  setEmail(email: string) {
    this.email = email
  }

  setProviderToken(providerToken: string) {
    this.providerToken = providerToken
  }

  setNickname(nickname: string) {
    this.nickname = nickname
  }

  setProfileImageUrl(profileImageUrl: string) {
    this.profileImageUrl = profileImageUrl
  }

  setTotalProgress(totalProgress: number) {
    this.totalProgress = totalProgress
  }

  setCurrentProgress(currentProgress: number) {
    this.currentProgress = currentProgress
  }

  setProgressTitle(progressTitle: string[]) {
    this.progressTitle = progressTitle
  }

  get nickNameWordCount() {
    return this.nickname ? this.nickname.length : 0
  }
}
