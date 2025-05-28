import { FC, useState } from 'react'
import styled from 'styled-components'
import EsportsArenaUrl from '../../assets/large-images/esports-arena-img.png?url'
import EsportsArena2Url from '../../assets/large-images/esports-arena2-img.png?url'
import LogoIcon from '../../assets/logo/icon-logo.svg?react'
import { PointSelector } from '../../components/point-selector.component.tsx'
import { pxToRem } from '../../utils/font.ts'
import { Bold, PinkSpan, SectionTitle } from './styles.ts'

const ArenaImagesList = [EsportsArenaUrl, EsportsArena2Url, EsportsArenaUrl, EsportsArena2Url, EsportsArenaUrl]

export const EsportsArena: FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  return (
    <ScreenContainer>
      <TextContainer>
        <TitleContainer>
          <Title>
            <LogoIcon />
            <span>ESPORTS ARENA</span>
          </Title>
          <Subtitle>OUR GOAL FOR 10 YEARS</Subtitle>
        </TitleContainer>
        <InfoContainer>
          <Description>
            <Bold>
              World-class teams in <PinkSpan>16</PinkSpan> disciplines:
            </Bold>
            <br />
            CS GO, Valorant, DotA2, PUBG, LoL, Heroes of Storm, Hearthstone, StarCraft, World of Tank, Rainbow Six
            Siege, Mortal Combat X, Apex Legends, Overwatch, Call of Duty, WarZone , Fortnite, Arena of Valor)
          </Description>
          <Description>
            <Bold>
              The eSports market will grow by <PinkSpan>20%</PinkSpan> annually until 2027.
            </Bold>{' '}
            Research and Markets specialists gave a forecast for the development of eSports until 2027. According to
            them, this market will grow by an average of <PinkSpan>20% per year</PinkSpan>
          </Description>
        </InfoContainer>
      </TextContainer>
      <EsportsArenaPhotosContainer>
        <EsportsArenaImg src={ArenaImagesList[currentPhotoIndex]} />
        <PointSelector
          size={ArenaImagesList.length}
          currentIndex={currentPhotoIndex}
          setCurrentIndex={setCurrentPhotoIndex}
        />
      </EsportsArenaPhotosContainer>
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  min-height: calc(100vh - 240px);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const EsportsArenaImg = styled.img`
  justify-self: right;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 500px;
    justify-self: center;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  justify-self: center;
  max-width: 508px;
  z-index: 1;

  @media (max-width: 1199px) {
    max-width: 466px;
    justify-self: center;
  }

  @media (max-width: 991px) {
    max-width: unset;
  }
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (max-width: 767px) {
    gap: 0px;
  }
`
const Title = styled(SectionTitle)`
  white-space: nowrap;
  letter-spacing: 3px;

  svg {
    margin-right: 14px;

    @media (max-width: 1199px) {
      width: 62px;
      transform: translateY(7px);
    }

    @media (max-width: 991px) {
      width: 64px;
      transform: none;
    }

    @media (max-width: 767px) {
      width: 52px;
    }

    @media (max-width: 499px) {
      width: 48px;
    }
  }

  @media (max-width: 991px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 499px) {
    text-align: center;
  }
`

const Subtitle = styled(SectionTitle)`
  font-size: ${pxToRem(42)};
  margin: 0;
  opacity: 0.4;

  @media (max-width: 1399px) {
    font-size: ${pxToRem(40)};
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(36)};
    line-height: 44px;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(28)};
    line-height: 24px;
  }

  @media (max-width: 499px) {
    font-size: ${pxToRem(24)};
    line-height: 24px;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`
const Description = styled.div`
  font-family: Achivo, sans-serif;
  font-size: ${pxToRem(18)};
  max-width: 488px;

  @media (max-width: 1199px) {
    max-width: 426px;
    justify-self: center;
    font-size: ${pxToRem(16)};
  }

  @media (max-width: 991px) {
    max-width: 646px;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(14)};
    max-width: unset;
  }

  @media (max-width: 499px) {
    font-size: ${pxToRem(12)};
    max-width: unset;
  }
`

const EsportsArenaPhotosContainer = styled.div``
