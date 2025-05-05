import { FC, PropsWithChildren } from 'react'
import { Footer } from './footer/footer.component'
import { Header } from './header/header.component'
import styled from 'styled-components'
import MainBg from '../assets/large-images/main-bg.png?url'
import CornerImageUrl from '../assets/large-images/main-page-corner-dots.png?url'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <CornerImage src={CornerImageUrl} />
        <PageContentContainer>{children}</PageContentContainer>
        <Footer />
      </LayoutContainer>
    </>
  )
}

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: url('${MainBg}'), linear-gradient(transparent calc(100vh - 300px), #8c4402);
  background-attachment: fixed;
  background-size: cover;
  background-position-x: center;
`

const PageContentContainer = styled.div`
  position: relative;
  flex: 1 0 auto;
`

const CornerImage = styled.img`
  position: fixed;
  bottom: 120px;
  right: 0;

  @media (max-width: 1439px) {
    bottom: 0;
  }

  @media (max-width: 1199px) {
    display: none;
  }
`
