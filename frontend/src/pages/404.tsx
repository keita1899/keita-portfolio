import { FlexLayout } from '@/components/layouts/common/FlexLayout'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const router = useRouter()

  return (
    <FlexLayout justifyContent="center" alignItems="center" direction="column">
      <Typography variant="h1" marginTop={8}>
        404
      </Typography>
      <Typography variant="h3">Not Found</Typography>
      <Typography>お探しのページは見つかりません</Typography>
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

export default Custom404
