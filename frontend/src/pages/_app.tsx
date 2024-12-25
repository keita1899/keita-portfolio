import '@/styles/globals.css'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/layouts/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppCacheProvider>
  )
}
