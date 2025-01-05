import XIcon from '@mui/icons-material/X'
import { Typography } from '@mui/material'
import { PortfolioLink } from './PortfolioLink'

type XLinkProps = {
  url: string
}

export const XLink = ({ url }: XLinkProps) => {
  return (
    <PortfolioLink href={url} backgroundColor="#0F1419" color="#fff">
      <XIcon sx={{ marginRight: 1 }} />
      <Typography>X</Typography>
    </PortfolioLink>
  )
}
