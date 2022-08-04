import { makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export type TermsAgreement = {
  id: string
  title: string
  content: string
  checked: boolean
}

export default class OnboardingStore {
  rootStore: RootStore

  totalProgress: number = 5
  currentProgress: number = 0
  progressTitle: string[] = ['', '']

  providerToken?: string
  email: string = ''
  termsAgreements: Array<TermsAgreement> = [
    {
      id: 'service',
      title: '서비스 이용약관',
      content: '작성중...',
      checked: false,
    },
    {
      id: 'privacy',
      title: '개인정보처리방침',
      content: '작성중...',
      checked: false,
    },
  ]
  nickname: string = ''
  profileImageUrl: string = ''
  sex: undefined | 'M' | 'F' = undefined
  birthday: string = '' // YYYY-MM-DD
  categories: string[] = [] // LABEL string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      providerToken: false,
      email: false,
    })
    this.rootStore = rootStore
  }

  setAgreementChecked(id: string, checked: boolean) {
    const term = this.termsAgreements.find((term) => term.id === id)

    if (!term) {
      throw new Error('해당 id의 약관이 없습니다.')
    }

    term.checked = checked
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

  unCheckAllTerms() {
    this.termsAgreements.forEach((term) => {
      term.checked = false
    })
  }

  addCategory(title: string) {
    this.categories = [...this.categories, title]
  }

  removeCategory(title: string) {
    this.categories = this.categories.filter((category) => category !== title)
  }

  get nickNameWordCount() {
    return this.nickname ? this.nickname.length : 0
  }
}
