import { GitHub } from '@mui/icons-material'
import XIcon from '@mui/icons-material/X'
import { Box, Typography, IconButton } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <IconButton
          color="inherit"
          href="https://github.com/keita1899"
          target="_blank"
          aria-label="GitHub"
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://x.com/k1e8i9t9a"
          target="_blank"
          aria-label="XIcon"
        >
          <XIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ marginBottom: '8px' }}>
        © {new Date().getFullYear()} keita. All rights reserved.
      </Typography>
    </Box>
  )
}
