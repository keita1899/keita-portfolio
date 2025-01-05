import { Box, BoxProps } from '@mui/material'
import { ReactNode } from 'react'

type ResponsiveValue<T> = T | { [key: string]: T }

type FlexLayoutProps = {
  children: ReactNode
  justifyContent?: ResponsiveValue<
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >
  alignItems?: ResponsiveValue<
    'normal' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  >
  direction?: ResponsiveValue<'row' | 'column'>
} & BoxProps

export const FlexLayout = ({
  children,
  justifyContent = 'normal',
  alignItems = 'normal',
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
