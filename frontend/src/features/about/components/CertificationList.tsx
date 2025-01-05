import { List, ListItem, ListItemText } from '@mui/material'
import { Certification } from '@/types/certification'

type CertificationListProps = {
  certifications: Certification[]
}

export const CertificationList = ({
  certifications,
}: CertificationListProps) => {
  return (
    <List>
      {certifications.map((certification) => (
        <ListItem key={certification.id}>
          <ListItemText
            primary={certification.name}
            secondary={`取得日: ${certification.acquiredDate}`}
          />
        </ListItem>
      ))}
    </List>
  )
}
