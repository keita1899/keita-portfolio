import { Link as MuiLink, Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type NavLinkProps = {
  href: string
  icon: ReactNode
  label: string
}

export const NavLink = ({ href, icon, label }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <MuiLink
      component={Link}
      href={href}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: isActive ? '#1976d2' : '#222',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        '&:hover': { color: '#1976d2' },
      }}
    >
      {icon}
      <Typography variant="body2">{label}</Typography>
    </MuiLink>
  )
}
