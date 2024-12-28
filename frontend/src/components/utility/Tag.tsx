import { Chip } from '@mui/material'

type TagProps = {
  tag: string
}

export const Tag = ({ tag }: TagProps) => {
  return <Chip label={tag} sx={{ marginRight: 1 }} />
}
