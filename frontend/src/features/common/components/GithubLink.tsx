import GitHubIcon from '@mui/icons-material/GitHub'
import { Typography } from '@mui/material'
import { PortfolioLink } from './PortfolioLink'

type GithubLinkProps = {
  url: string
}

export const GithubLink = ({ url }: GithubLinkProps) => {
  return (
    <PortfolioLink href={url} color="inherit">
      <GitHubIcon sx={{ marginRight: 1 }} />
      <Typography>Github</Typography>
    </PortfolioLink>
  )
}
