import { Box, Container, Typography } from '@mui/material'
import { UserAvatar } from '@/components/utility/UserAvatar'

type HeaderProps = {
  username: string
  avatar: string
}

export const Header = ({ username, avatar }: HeaderProps) => {
  return (
    <Box
      component="header"
      sx={{ backgroundColor: '#f5f5f5', padding: '16px 0' }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <UserAvatar username={username} url={avatar} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {username}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
