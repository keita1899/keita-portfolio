import { Link as MuiLink, Typography } from '@mui/material'
import Link from 'next/link'
import { ReactNode } from 'react'

type NavLinkProps = {
  href: string
  icon: ReactNode
  label: string
}

export const NavLink = ({ href, icon, label }: NavLinkProps) => {
  return (
    <MuiLink
      component={Link}
      href={href}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#222',
        textDecoration: 'none',
        '&:hover': { color: '#1976d2' },
      }}
    >
      {icon}
      <Typography variant="body2">{label}</Typography>
    </MuiLink>
  )
}
