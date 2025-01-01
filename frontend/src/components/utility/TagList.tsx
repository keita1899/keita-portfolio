import { memo } from 'react'
import { Tag } from './Tag'

type TagListProps = {
  tags: string[]
}

export const TagList = memo(({ tags }: TagListProps) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </>
  )
})
