import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { Content } from './Content'

type MainProps = {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: 'calc(100vh - 64px)',
        padding: 2,
      }}
    >
      <Content>{children}</Content>
    </Box>
  )
}
