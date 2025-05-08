import { FC } from 'react'
import styled from 'styled-components'
import GamesIcon from '../../assets/common/games-icon.svg?react'
import LastFeaturesIcon from '../../assets/common/last-features-icon.svg?react'
import GamesImgUrl from '../../assets/large-images/games-img.png?url'
import LastFeaturesImgUrl from '../../assets/large-images/last-features-img.png?url'
import { pxToRem } from '../../utils/font.ts'

export const LastUpdates: FC = () => {
  return (
    <ScreenContainer>
      <LastFeaturesWrapper>
        <SectionLabel>
          <LastFeaturesIcon />
          <span>LAST FEATURES</span>
        </SectionLabel>
        <LastFeaturesImg src={LastFeaturesImgUrl} />
        <TextBlock>
          <FeatureDate>25.05.2023</FeatureDate>
          <Title>PLAY IN YOUR FAVORITE GAMES AND EARN MONEY</Title>
          <Description>
            We give you the opportunity to start making money on games even if you are not a professional cyber player !
            Play your favorite game and earn tokens that you can convert into USDT and exchange for skins, tickets on
            cyber events and so on !
          </Description>
        </TextBlock>
      </LastFeaturesWrapper>
      <GamesSectionWrapper>
        <div>
          <SectionLabel>
            <GamesIcon />
            <span>GAMES</span>
          </SectionLabel>
          <TextBlock>
            <Title>WE WILL CHANGE THE WORLD OF ESPORTS</Title>
            <Description>
              Cyber sports is a revolutionary project created by gamers for gamers. Plunge into the world of gaming and
              start earning money without much effort just by playing!
            </Description>
          </TextBlock>
        </div>
        <GamesImg src={GamesImgUrl} />
      </GamesSectionWrapper>
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  min-height: calc(100vh - 240px);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-gap: 104px;

  @media (max-width: 1919px) {
    grid-gap: 0;
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
  }

  @media (max-width: 1199px) {
    grid-gap: 30px;
  }
`
const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  font-family: Archivo, sans-serif;
  font-size: ${pxToRem(16)};
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: ${pxToRem(14)};
  }
`
const Title = styled.div`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(32)};
  font-weight: bold;
  line-height: 48px;
  letter-spacing: 1.3px;
  margin: 0;
  color: white;
  text-shadow: 0 0 25px currentColor;

  @media (max-width: 1399px) {
    font-size: ${pxToRem(30)};
    line-height: 44px;
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(28)};
    line-height: 40px;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(24)};
    line-height: 32px;
  }
`
const Description = styled.div`
  font-family: Achivo, sans-serif;
  font-size: ${pxToRem(16)};
  letter-spacing: 0.5px;

  @media (max-width: 767px) {
    font-size: ${pxToRem(12)};
  }
`

const LastFeaturesWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  max-width: 582px;

  ${Title} {
    max-width: 525px;
  }

  @media (max-width: 767px) {
    grid-gap: 8px;

    ${Title} {
      max-width: 320px;
    }
  }
`
const FeatureDate = styled.div`
  font-family: Achivo, sans-serif;
  font-size: ${pxToRem(16)};
  opacity: 0.4;
  margin-bottom: 6px;

  @media (max-width: 767px) {
    font-size: ${pxToRem(12)};
  }
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 767px) {
    gap: 8px;
  }
`
const GamesSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  max-width: 762px;

  ${Title} {
    max-width: 356px;
  }

  @media (max-width: 991px) {
    max-width: 582px;
  }
`

const LastFeaturesImg = styled.img`
  width: 100%;
`
const GamesImg = styled.img`
  position: relative;

  @media (max-width: 991px) {
    max-width: 180px;
  }
`
