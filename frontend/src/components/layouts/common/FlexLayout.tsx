import { Box, BoxProps } from '@mui/material'
import { ReactNode } from 'react'

type FlexLayoutProps = {
  children: ReactNode
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  direction?: 'row' | 'column'
} & BoxProps

export const FlexLayout = ({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  direction = 'row',
  ...props
}: FlexLayoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexDirection: direction,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
