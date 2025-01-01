import { memo } from 'react'
import { ListItem as ListItemType } from '../types/listItem'
import { ListItem } from './ListItem'

type ListProps = {
  items: ListItemType[]
}

export const List = memo(({ items }: ListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  )
})
