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
import { useRouter } from 'next/router'

// Layout see: https://nextjs.org/docs/basic-features/layouts
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<{ dehydratedState: unknown }> & {
  Component: NextPageWithLayout
}

export default function MyApp({
  Component,
  pageProps: { dehydratedState, ...restPageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [queryClient] = useState(() => new QueryClient())
  const router = useRouter()

  useEffect(() => {
    const appContainer = document.getElementById('app-container')

    const calculateSpaces = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)

      // background-attachment: fixed 모바일에서 적용하기 위한 트릭
      let contentWidth = appContainer
        ? appContainer.clientWidth > 10
          ? appContainer.clientWidth + 'px'
          : '100%'
        : '100%'
      document.documentElement.style.setProperty(
        '--content-width',
        `${contentWidth}`
      )
    }

    calculateSpaces()
    window.addEventListener('resize', calculateSpaces)

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
        }, 1000)
      }
      const disableWindowScrollBlur = () => {
        window.removeEventListener('scroll', focusOut, true)
      }

      document.addEventListener('focus', enableWindowScrollBlur, true)
      document.addEventListener('blur', disableWindowScrollBlur, true)

      return () => {
        window.removeEventListener('resize', calculateSpaces)
        window.removeEventListener('scroll', focusOut, true)
        document.removeEventListener('focus', enableWindowScrollBlur, true)
        document.removeEventListener('blur', disableWindowScrollBlur, true)
      }
    }

    return () => {
      window.removeEventListener('resize', calculateSpaces)
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
          <Hydrate state={dehydratedState}>
            {/* 곧바로 theme 상태 사용하고 싶었다.. 나중에 리팩토링 필요 */}
            <StoreContext.Consumer>
              {(rootStore) => {
                return (
                  <Observer>
                    {() => {
                      const isDark = rootStore!.themeStore.isDark
                      let themeName: keyof typeof theme | null = null

                      if (/^\/(launch|onboarding)/.test(router.pathname)) {
                        themeName = 'dark'
                      } else {
                        themeName = isDark ? 'dark' : 'light'
                      }

                      return (
                        <ThemeProvider theme={theme[themeName]}>
                          <GlobalStyle />
                          {getLayout(<Component {...restPageProps} />)}
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
