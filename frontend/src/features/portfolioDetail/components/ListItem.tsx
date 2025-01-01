import { ListItem as ListItemType } from '../types/listItem'

type ListItemProps = {
  item: ListItemType
}

export const ListItem = ({ item }: ListItemProps) => {
  return <li>{item.name}</li>
}
