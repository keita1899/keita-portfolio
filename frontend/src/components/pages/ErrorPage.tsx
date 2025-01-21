import { FlexLayout } from '@/components/layouts/common/FlexLayout'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

type ErrorPageProps = {
  code: number
  message: string
  description: string
}

export const ErrorPage = ({ code, message, description }: ErrorPageProps) => {
  const router = useRouter()

  return (
    <FlexLayout justifyContent="center" alignItems="center" direction="column">
      <Typography variant="h1" marginTop={8}>
        {code}
      </Typography>
      <Typography variant="h3">{message}</Typography>
      <Typography>{description}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.back()}
        sx={{ marginTop: 4 }}
      >
        前に戻る
      </Button>
    </FlexLayout>
  )
}
