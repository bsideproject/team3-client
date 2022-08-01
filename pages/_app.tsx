import StoreProvider, { StoreContext } from '@/stores/StoreProvider'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Observer } from 'mobx-react-lite'
import theme from '@/styles/theme'
import GlobalStyle from '@/styles/GlobalStyle'

// Layout see: https://nextjs.org/docs/basic-features/layouts
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }, [])

  return (
    <StoreProvider>
      {/* 곧바로 theme 상태 사용하고 싶었다.. 나중에 리팩토링 필요 */}
      <StoreContext.Consumer>
        {(rootStore) => {
          const themeName = rootStore!.themeStore.themeName

          return (
            <Observer>
              {() => (
                <ThemeProvider theme={theme[themeName]}>
                  <GlobalStyle />
                  {getLayout(<Component {...pageProps} />)}
                </ThemeProvider>
              )}
            </Observer>
          )
        }}
      </StoreContext.Consumer>
    </StoreProvider>
  )
}
