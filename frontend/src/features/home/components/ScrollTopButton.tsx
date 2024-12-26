import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { IconButton, Box } from '@mui/material'
import { useState, useEffect } from 'react'

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 50,
        right: 50,
        zIndex: 1000,
        display: visible ? 'block' : 'none',
      }}
    >
      <IconButton
        color="primary"
        onClick={scrollToTop}
        aria-label="scroll to top"
        sx={{
          backgroundColor: '#00bcd4',
          borderRadius: '50%',
          padding: '10px',
          '&:hover': {
            backgroundColor: '#0097a7',
          },
        }}
      >
        <ArrowUpwardIcon sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  )
}
