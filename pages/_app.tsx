import Store from '@/models/store'
import '@/styles/global.css'
import { Provider } from 'mobx-react'
import type { AppProps } from 'next/app'

const store = new Store()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider {...store.getStores()}>
      <Component {...pageProps} />
    </Provider>
  )
}
