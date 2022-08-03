import { makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export default class OnboardingStore {
  rootStore: RootStore

  totalStep: number = 5
  currentStep: number = 1
  stepTitle: string[] = ['', '']

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

  setTotalStep(totalStep: number) {
    this.totalStep = totalStep
  }

  setCurrentStep(currentStep: number) {
    this.currentStep = currentStep
  }

  setStepTitle(stepTitle: string[]) {
    this.stepTitle = stepTitle
  }

  get nickNameWordCount() {
    return this.nickname ? this.nickname.length : 0
  }
}
