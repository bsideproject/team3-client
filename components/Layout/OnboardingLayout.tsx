import { ReactNode } from 'react'
import { PrevButton } from '../ui/buttons'
import BasicLayout from './BasicLayout'

const OnboardingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BasicLayout>
      <header>
        <PrevButton />
      </header>
      <main>{children}</main>
    </BasicLayout>
  )
}
export default OnboardingLayout
