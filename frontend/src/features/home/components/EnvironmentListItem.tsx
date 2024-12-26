import { ListItem, ListItemText } from '@mui/material'
import { Environment } from '@/types/environments'

type EnvironmentListItemProps = {
  environment: Environment
  index: number
  length: number
}

export const EnvironmentListItem = ({
  environment,
  index,
  length,
}: EnvironmentListItemProps) => {
  return (
    <ListItem
      sx={{
        borderBottom: index !== length - 1 ? '1px solid #ddd' : 'none',
        display: 'flex',
      }}
    >
      <ListItemText
        primary={environment.label}
        primaryTypographyProps={{
          variant: 'subtitle1',
          fontWeight: 'bold',
        }}
        sx={{ flex: 1 }}
      />
      <ListItemText
        primary={environment.name}
        primaryTypographyProps={{
          variant: 'body1',
        }}
        sx={{ flex: 1 }}
      />
    </ListItem>
  )
}
