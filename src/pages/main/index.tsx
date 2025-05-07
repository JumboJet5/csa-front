import { FC } from 'react'
import styled from 'styled-components'
import { AboutToken } from './about-token.component.tsx'
import { AirDrop } from './air-drop.component.tsx'
import { ComingSoon } from './coming-soon.component.tsx'
import { EsportsAcademy } from './esports-academy.component.tsx'
import { OurPartners } from './our-partners.component.tsx'
import { Roadmap } from './roadmap.component.tsx'

export const Main: FC = () => {
  return (
    <MainPageContainer>
      <EsportsAcademy />
      <OurPartners />
      <AirDrop />
      <Roadmap />
      <AboutToken />
      <ComingSoon />
    </MainPageContainer>
  )
}

const MainPageContainer = styled.div`
  padding: 16px 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  gap: 100px;

  @media (max-width: 991px) {
    padding: 16px;
  }
`
