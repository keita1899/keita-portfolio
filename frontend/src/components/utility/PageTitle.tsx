import { Typography } from '@mui/material'
import { TextAlignLayout } from '../layouts/common/TextAlignLayout'

type PageTitleProps = {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <TextAlignLayout align="center">
      <Typography variant="h3">{title}</Typography>
    </TextAlignLayout>
  )
}
