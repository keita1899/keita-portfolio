import { memo } from 'react'
import { Tag } from './Tag'
import { Tag as TagType } from '@/types/tag'
import { Box } from '@mui/material'

type TagListProps = {
  tags: TagType[]
  maxTags?: number
}

export const TagList = memo(({ tags, maxTags }: TagListProps) => {
  const tagsToDisplay = maxTags ? tags.slice(0, maxTags) : tags
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      {tagsToDisplay.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </Box>
  )
})
