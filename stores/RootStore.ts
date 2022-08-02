import OnboardingStore from './OnboardingStore'
import ThemeStore from './ThemeStore'

export default class RootStore {
  themeStore: ThemeStore
  onboardingStore: OnboardingStore

  constructor() {
    this.themeStore = new ThemeStore(this)
    this.onboardingStore = new OnboardingStore(this)
  }
}
