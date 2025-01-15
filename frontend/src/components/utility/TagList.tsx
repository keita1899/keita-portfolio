import { memo } from 'react'
import { Tag } from './Tag'
import { Tag as TagType } from '@/types/tag'

type TagListProps = {
  tags: TagType[]
  maxTags?: number
}

export const TagList = memo(({ tags, maxTags }: TagListProps) => {
  const tagsToDisplay = maxTags ? tags.slice(0, maxTags) : tags
  return (
    <>
      {tagsToDisplay.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </>
  )
})
