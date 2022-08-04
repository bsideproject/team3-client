import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import { viewportHeight } from '@/styles/mixins'
import { onboardingConfirmButtonHeight } from '@/components/ui/buttons'

const EmptyLayout = ({ children }: { children: ReactNode }) => {
  return <AppContainer>{children}</AppContainer>
}
export default EmptyLayout
