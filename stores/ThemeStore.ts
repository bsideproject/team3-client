import { makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export default class ThemeStore {
  rootStore: RootStore
  themeName: 'dark' | 'light' = 'dark'

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }
}
