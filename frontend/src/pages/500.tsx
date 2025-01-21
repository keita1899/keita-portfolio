import { FlexLayout } from '@/components/layouts/common/FlexLayout'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const Custom500 = () => {
  const router = useRouter()

  return (
    <FlexLayout justifyContent="center" alignItems="center" direction="column">
      <Typography variant="h1" marginTop={8}>
        500
      </Typography>
      <Typography variant="h3">Internal Server Error</Typography>
      <Typography>
        サーバーで問題が発生しました。時間をおいて再度お試しください。
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.back()}
        sx={{ marginTop: 4 }}
        aria-label="前のページに戻る"
      >
        前に戻る
      </Button>
    </FlexLayout>
  )
}

export default Custom500
