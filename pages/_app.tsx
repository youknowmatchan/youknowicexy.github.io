import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Transition from '@/components/Transition'
import { ThemeProvider } from 'next-themes'




export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
    <Transition>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Transition>
    </ThemeProvider>
  )
}