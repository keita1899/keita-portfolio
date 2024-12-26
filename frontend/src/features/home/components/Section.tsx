import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { SectionDescription } from './SectionDescription'
import { SectionTitle } from './SectionTitle'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignContainer'

type SectionProps = {
  title: string
  description?: string
  backgroundColor?: string
  children: ReactNode
}

export const Section = ({
  title,
  description,
  backgroundColor,
  children,
}: SectionProps) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        paddingY: 8,
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextAlignLayout align="center">
        <SectionTitle title={title} />
        {description && <SectionDescription description={description} />}
      </TextAlignLayout>
      {children}
    </Box>
  )
}
