import { ReactNode } from 'react'
import { PrevButton } from '../ui/buttons'

const OnboardingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <PrevButton />
      </header>
      <main>{children}</main>
    </>
  )
}
export default OnboardingLayout
