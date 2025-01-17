import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { SectionTitle } from './SectionTitle'

type SectionProps = {
  title: string
  marginTop?: number
  children: ReactNode
}

export const Section = ({ title, marginTop = 6, children }: SectionProps) => {
  return (
    <Box sx={{ marginTop: marginTop }}>
      <SectionTitle title={title} />
      <Box sx={{ marginTop: 2 }}>{children}</Box>
    </Box>
  )
}
