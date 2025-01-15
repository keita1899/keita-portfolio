import { Chip } from '@mui/material'
import { Tag as TagType } from '@/types/tag'

type TagProps = {
  tag: TagType
}

export const Tag = ({ tag }: TagProps) => {
  return <Chip label={tag.name} sx={{ marginRight: 1 }} />
}
