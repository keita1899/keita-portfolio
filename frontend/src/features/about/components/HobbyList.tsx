import { List, ListItem, ListItemText } from '@mui/material'
import { Hobby } from '@/types/hobby'

type HobbyListProps = {
  hobbies: Hobby[]
}

export const HobbyList = ({ hobbies }: HobbyListProps) => {
  return (
    <List>
      {hobbies.map((hobby) => (
        <ListItem key={hobby.id}>
          <ListItemText primary={hobby.name} secondary={hobby.description} />
        </ListItem>
      ))}
    </List>
  )
}
