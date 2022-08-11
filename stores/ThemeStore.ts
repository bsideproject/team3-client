import { makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export default class ThemeStore {
  rootStore: RootStore
  isDark: boolean = false

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  changeToDarkMode() {
    this.isDark = true
  }

  changeToLightMode() {
    this.isDark = false
  }
}
