import LaunchIcon from '@mui/icons-material/Launch'
import { Typography } from '@mui/material'
import { PortfolioLink } from './PortfolioLink'

type DemoLinkProps = {
  url: string
}

export const DemoLink = ({ url }: DemoLinkProps) => {
  return (
    <PortfolioLink href={url} color="primary" borderColor="primary">
      <LaunchIcon sx={{ marginRight: 1 }} />
      <Typography>デモ</Typography>
    </PortfolioLink>
  )
}
