import StoreProvider from '@/models/StoreProvider'
import '@/styles/index.scss'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider hydrationData={pageProps.hydrationData}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
