import { ErrorPage } from '@/components/pages/ErrorPage'

const Custom500 = () => {
  return (
    <ErrorPage
      code={500}
      message="Internal Server Error"
      description="サーバーで問題が発生しました。時間をおいて再度お試しください。"
    />
  )
}

export default Custom500
