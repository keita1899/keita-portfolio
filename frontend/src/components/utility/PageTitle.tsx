import { Typography } from '@mui/material'
import { TextAlignLayout } from '../layouts/common/TextAlignContainer'

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
