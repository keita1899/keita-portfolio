import { Box } from '@mui/material'
import Link from 'next/link'

type DetailLinkProps = {
  href: string
}

export const DetailLink = ({ href }: DetailLinkProps) => {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: 'inline-block',
        textDecoration: 'none',
        padding: '8px 16px',
        backgroundColor: 'primary.main',
        color: 'white',
        borderRadius: '4px',
        textAlign: 'center',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      詳しく見る
    </Box>
  )
}
