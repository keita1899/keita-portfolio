import { ReactNode } from 'react'

type HomeLayoutProps = {
  children: ReactNode
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <>{children}</>
}
