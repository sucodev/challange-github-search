import '../styles/main.css'

import type { AppProps } from 'next/app'

import { Toast } from '../components/Containers/Toast'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
        <Toast />
    </>
  )
}
