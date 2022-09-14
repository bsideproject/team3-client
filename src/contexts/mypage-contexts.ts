import { createContext } from 'react'

export const MypageCategoryContext = createContext({
  isPossibleSubmit: false,
  changePossibleSubmit: (possible: boolean) => {},
})
