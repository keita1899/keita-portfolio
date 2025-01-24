import Head from 'next/head'
import { ErrorPage } from '@/components/pages/ErrorPage'

const Custom500 = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="500 エラー: サーバーで問題が発生しました。時間をおいて再度お試しください。"
        />
        <title>500 Internal Server Error | keita-portfolio</title>
      </Head>
      <ErrorPage
        code={500}
        message="Internal Server Error"
        description="サーバーで問題が発生しました。時間をおいて再度お試しください。"
      />
    </>
  )
}

export default Custom500
