import { FC } from 'react'
import styled from 'styled-components'
import { ComingSoon } from './coming-soon.component.tsx'
import { AboutToken } from './about-token.component.tsx'
import { OurPartners } from './our-partners.component.tsx'

export const Main: FC = () => {
  return (
    <MainPageContainer>
      <OurPartners />
      <AboutToken />
      <ComingSoon />
    </MainPageContainer>
  )
}

const MainPageContainer = styled.div`
  padding: 16px 60px;
  height: 100%;

  @media (max-width: 991px) {
    padding: 16px;
  }
`
