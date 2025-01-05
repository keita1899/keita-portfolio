import { Button } from '@mui/material'
import { ReactNode } from 'react'

type PortfolioLinkProps = {
  href: string
  backgroundColor?: string
  hoverBackgroundColor?: string
  borderColor?: string
  hoverBorderColor?: string
  color?: string
  hoverColor?: string
  children: ReactNode
}

export const PortfolioLink = ({
  href,
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
  hoverBorderColor,
  color,
  hoverColor,
  children,
}: PortfolioLinkProps) => {
  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      fullWidth
      sx={{
        textTransform: 'none',
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor || 'transparent'}`,
        color: color,
        '&:hover': {
          backgroundColor: hoverBackgroundColor || backgroundColor,
          border: `1px solid ${hoverBorderColor || borderColor || 'transparent'}`,
          color: hoverColor || color,
        },
      }}
    >
      {children}
    </Button>
  )
}
