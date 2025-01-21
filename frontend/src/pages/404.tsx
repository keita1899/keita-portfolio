import { ErrorPage } from '@/components/pages/ErrorPage'

const Custom404 = () => {
  return (
    <ErrorPage
      code={404}
      message="Not Found"
      description="お探しのページは見つかりませんでした。URLを確認してください。"
    />
  )
}

export default Custom404
