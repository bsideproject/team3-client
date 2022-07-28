import ThemeStore from './ThemeStore'

export default class RootStore {
  themeStore: ThemeStore

  constructor() {
    this.themeStore = new ThemeStore(this)
  }
}
