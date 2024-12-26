import { Typography } from '@mui/material'

type SectionDescriptionProps = {
  description: string
}

export const SectionDescription = ({
  description,
}: SectionDescriptionProps) => {
  return <Typography sx={{ marginTop: 2 }}>{description}</Typography>
}
