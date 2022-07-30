import { ReactNode } from 'react'

const OnboardingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
    </>
  )
}
export default OnboardingLayout
