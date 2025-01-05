import { Box, Container, Typography } from '@mui/material'
import { UserAvatar } from '@/components/utility/UserAvatar'

type HeaderProps = {
  username: string
  avatar: string
}

export const Header = ({ username, avatar }: HeaderProps) => {
  return (
    <Box component="header" sx={{ padding: '16px 0' }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <UserAvatar url={avatar} alt={username} width={40} height={40} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {username}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
