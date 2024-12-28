import { Button } from '@mui/material'
import { ReactNode } from 'react'

type PortfolioLinkProps = {
  href: string
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  children: ReactNode
}

export const PortfolioLink = ({
  href,
  color,
  children,
}: PortfolioLinkProps) => {
  return (
    <Button
      variant="outlined"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
      sx={{
        textTransform: 'none',
      }}
    >
      {children}
    </Button>
  )
}
