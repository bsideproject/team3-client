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
import { isMobile } from 'react-device-detect'

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
    const calculateViewportHeight = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    calculateViewportHeight()
    window.addEventListener('resize', calculateViewportHeight)

    if (isMobile) {
      const focusOut = (event: Event) => {
        // event.stopPropagation()
        const scrollTarget = event.target as HTMLElement

        // window가 아닌것들은 모두 tagName이 존재하며, blur의 대상이 되지 않도록 한다.
        if (scrollTarget.tagName === undefined) {
          event.stopPropagation()
          let el = document.querySelector<HTMLInputElement>(':focus')
          if (el) el.blur()
        }
      }
      const enableWindowScrollBlur = () => {
        window.setTimeout(() => {
          window.addEventListener('scroll', focusOut, true)
        }, 500)
      }
      const disableWindowScrollBlur = () => {
        window.removeEventListener('scroll', focusOut, true)
      }

      document.addEventListener('focus', enableWindowScrollBlur, true)
      document.addEventListener('blur', disableWindowScrollBlur, true)

      return () => {
        window.removeEventListener('resize', calculateViewportHeight)
        window.removeEventListener('scroll', focusOut, true)
        document.removeEventListener('focus', enableWindowScrollBlur, true)
        document.removeEventListener('blur', disableWindowScrollBlur, true)
      }
    }

    return () => {
      window.removeEventListener('resize', calculateViewportHeight)
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=no,maximum-scale=1,width=device-width"
        />
        <style dangerouslySetInnerHTML={{ __html: fonts }} />
      </Head>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            {/* 곧바로 theme 상태 사용하고 싶었다.. 나중에 리팩토링 필요 */}
            <StoreContext.Consumer>
              {(rootStore) => {
                return (
                  <Observer>
                    {() => {
                      const isDark = rootStore!.themeStore.isDark
                      return (
                        <ThemeProvider theme={theme[isDark ? 'dark' : 'light']}>
                          <GlobalStyle />
                          {getLayout(<Component {...pageProps} />)}
                        </ThemeProvider>
                      )
                    }}
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
