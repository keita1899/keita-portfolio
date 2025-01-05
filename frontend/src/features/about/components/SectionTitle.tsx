import { Typography } from '@mui/material'

type SectionTitleProps = {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return <Typography variant="h5">{title}</Typography>
}
