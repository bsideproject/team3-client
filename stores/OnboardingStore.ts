import service from '@/services/service'
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

  isProfileImageChanged: boolean = false

  providerToken?: string
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
  profileImageUrl: string | undefined
  sex: undefined | 'M' | 'F'
  birthYear: number | undefined // YYYY
  categories: string[] = [] // LABEL string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      providerToken: false,
      submit: false,
    })
    this.rootStore = rootStore
  }

  setIsProfileImageChanged(isChanged: boolean) {
    this.isProfileImageChanged = isChanged
  }

  setAgreementChecked(id: string, checked: boolean) {
    const term = this.termsAgreements.find((term) => term.id === id)

    if (!term) {
      throw new Error('해당 id의 약관이 없습니다.')
    }

    term.checked = checked
  }

  setProviderToken(providerToken: string) {
    this.providerToken = providerToken
  }

  setNickname(nickname: string) {
    this.nickname = nickname
  }

  setProfileImageUrl(profileImageUrl: string) {
    this.profileImageUrl = profileImageUrl
    this.isProfileImageChanged = true
  }

  setBirthYear(birthYear: number) {
    this.birthYear = birthYear
  }

  resetBirthYear() {
    this.birthYear = undefined
  }

  setSex(sex: 'M' | 'F') {
    this.sex = sex
  }

  resetSex() {
    this.sex = undefined
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

  submit() {
    service.onboardingService.register(this)
  }
}
