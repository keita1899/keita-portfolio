import { ReactNode } from 'react'
import { Container } from '@mui/material'

type ContentProps = {
  children: ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return <Container>{children}</Container>
}
