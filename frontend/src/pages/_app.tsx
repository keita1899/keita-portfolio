import '@/styles/globals.css'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '@/components/layouts/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="濱崎慶太の Web アプリの制作物をまとめたポートフォリオサイトです。"
        />
        <meta
          name="keywords"
          content="濱崎慶太, ポートフォリオ, Webアプリ, 制作物, Webエンジニア"
        />
        <meta name="author" content="濱崎慶太" />
        <title>keita-portfoilo</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppCacheProvider>
  )
}
