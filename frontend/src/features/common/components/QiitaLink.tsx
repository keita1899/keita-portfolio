import { Typography } from '@mui/material'
import { PortfolioLink } from './PortfolioLink'

type QiitaLinkProps = {
  url: string
}

export const QiitaLink = ({ url }: QiitaLinkProps) => {
  return (
    <PortfolioLink href={url} backgroundColor="#55c500" color="#fff">
      <Typography>Qiita</Typography>
    </PortfolioLink>
  )
}
