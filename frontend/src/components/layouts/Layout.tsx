import { ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { Main } from './Main'
import { Nav } from './Nav/Nav'

type LayoutProps = {
  children: ReactNode
}

const user = {
  name: 'テスト',
  avatar: '/images/avatar.png',
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header username={user.name} avatar={user.avatar} />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
