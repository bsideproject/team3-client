import '@/styles/index.scss'
import StoreProvider, { StoreContext } from '@/stores/StoreProvider'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Observer, observer } from 'mobx-react-lite'

// Layout see: https://nextjs.org/docs/basic-features/layouts
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <StoreProvider>
      {/* 곧바로 theme 상태 사용하고 싶었다.. 나중에 리팩토링 필요 */}
      <StoreContext.Consumer>
        {(rootStore) => (
          <Observer>
            {() => (
              <ThemeProvider
                theme={
                  rootStore?.themeStore.theme === 'dark'
                    ? { background: 'black' }
                    : { background: 'white' }
                }
              >
                <Background>{getLayout(<Component {...pageProps} />)}</Background>
              </ThemeProvider>
            )}
          </Observer>
        )}
      </StoreContext.Consumer>
    </StoreProvider>
  )
}

const Background = styled.div`
  height: 100vh;
  background: ${({ theme: { background } }) => background};
`
