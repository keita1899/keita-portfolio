import { Box, BoxProps } from '@mui/material'
import { ReactNode } from 'react'

type TextAlignLayoutProps = {
  children: ReactNode
  align: 'center' | 'left' | 'right'
} & BoxProps

export const TextAlignLayout = ({
  children,
  align,
  ...props
}: TextAlignLayoutProps) => {
  return (
    <Box sx={{ textAlign: align }} {...props}>
      {children}
    </Box>
  )
}
