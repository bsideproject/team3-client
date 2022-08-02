import { makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export default class OnboardingStore {
  rootStore: RootStore

  email: string = ''
  termsAgreementYnArr: Array<'Y' | 'N'> = ['N', 'N']
  nickname: string = ''
  profileImageUrl: string = ''
  sex: undefined | 'M' | 'F' = undefined
  birthday: string = '' // YYYY-MM-DD
  category: string[] = [] // LABEL string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      email: false,
    })
    this.rootStore = rootStore
  }

  setNickname(nickname: string) {
    this.nickname = nickname
  }

  get nickNameWordCount() {
    return this.nickname ? this.nickname.length : 0
  }
}
