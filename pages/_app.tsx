import StoreProvider, { StoreContext } from '@/stores/StoreProvider'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Observer } from 'mobx-react-lite'
import theme from '@/styles/theme'
import GlobalStyle from '@/styles/GlobalStyle'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'
import fonts from '@/styles/fonts'

// Layout see: https://nextjs.org/docs/basic-features/layouts
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }, [])

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: fonts }} />
      </Head>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            {/* 곧바로 theme 상태 사용하고 싶었다.. 나중에 리팩토링 필요 */}
            <StoreContext.Consumer>
              {(rootStore) => {
                const isDark = rootStore!.themeStore.isDark

                return (
                  <Observer>
                    {() => (
                      <ThemeProvider theme={theme[isDark ? 'dark' : 'light']}>
                        <GlobalStyle />
                        {getLayout(<Component {...pageProps} />)}
                      </ThemeProvider>
                    )}
                  </Observer>
                )
              }}
            </StoreContext.Consumer>
          </Hydrate>
        </QueryClientProvider>
      </StoreProvider>
    </>
  )
}
