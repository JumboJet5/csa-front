import { FC, PropsWithChildren } from 'react'
import { Footer } from './footer/footer.component'
import { Header } from './header/header.component'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
