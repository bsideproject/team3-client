import StoreProvider from '@/models/store'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider hydrationData={pageProps.hydrationData}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
