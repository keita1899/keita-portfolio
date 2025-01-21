import { ErrorPage } from '@/components/pages/ErrorPage'
import Head from 'next/head'

const Custom404 = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="404 エラー: お探しのページは見つかりませんでした。URLを確認してください。"
        />
        <title>404 Not Found | keita-portfolio</title>
      </Head>
      <ErrorPage
        code={404}
        message="Not Found"
        description="お探しのページは見つかりませんでした。URLを確認してください。"
      />
    </>
  )
}

export default Custom404
