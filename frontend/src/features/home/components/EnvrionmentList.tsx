import { List } from '@mui/material'
import { EnvironmentListItem } from './EnvironmentListItem'
import { Environment } from '@/types/environments'

type EnvironmentListProps = {
  environments: Environment[]
}

export const EnvironmentList = ({ environments }: EnvironmentListProps) => {
  return (
    <List>
      {environments.map((environment, index) => (
        <EnvironmentListItem
          environment={environment}
          index={index}
          length={environments.length}
          key={environment.id}
        />
      ))}
    </List>
  )
}
