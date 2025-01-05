import BookIcon from '@mui/icons-material/Book'
import { Typography } from '@mui/material'
import { PortfolioLink } from './PortfolioLink'

type BlogLinkProps = {
  url: string
}

export const BlogLink = ({ url }: BlogLinkProps) => {
  return (
    <PortfolioLink
      href={url}
      backgroundColor="#fff"
      borderColor="#000"
      color="#000"
    >
      <BookIcon sx={{ marginRight: 1 }} />
      <Typography>Blog</Typography>
    </PortfolioLink>
  )
}
