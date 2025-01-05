import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { SectionTitle } from './SectionTitle'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignLayout'

type SectionProps = {
  title: string
  children: ReactNode
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <Box sx={{ marginTop: 6 }}>
      <TextAlignLayout>
        <SectionTitle title={title} />
      </TextAlignLayout>
      {children}
    </Box>
  )
}
