import { FC } from 'react'
import SteamUrl from '../../assets/partners/steam.svg?url'
import FnaticUrl from '../../assets/partners/fnatic.svg?url'
import NavyEsportsUrl from '../../assets/partners/navy-esports.svg?url'
import CoinlistUrl from '../../assets/partners/coinlist.svg?url'
import ValveUrl from '../../assets/partners/valve.svg?url'
import styled from 'styled-components'
import { pxToRem } from '../../utils/font.ts'

export const OurPartners: FC = () => {
  return (
    <OurPartnersContainer>
      <TitleWrapper>
        <Prefix />
        <span>OUR PARTNERS</span>
        <Suffix />
      </TitleWrapper>
      <PartnersContainer>
        <img src={SteamUrl} className={'steam'} />
        <Separator />
        <img src={ValveUrl} className={'valve'} />
        <Separator />
        <img src={CoinlistUrl} className={'coinlist'} />
        <Separator />
        <img src={FnaticUrl} className={'fnatic'} />
        <Separator />
        <img src={NavyEsportsUrl} className={'navy-esports'} />
      </PartnersContainer>
    </OurPartnersContainer>
  )
}

const OurPartnersContainer = styled.div`
  min-height: calc(100vh - 240px);
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  grid-gap: 34px;

  @media (max-width: 991px) {
    grid-gap: 30px;
  }
`
const TitleWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(84)};
  font-weight: bold;
  line-height: 50px;
  text-shadow: 0 0 25px white;

  @media (max-width: 1399px) {
    font-size: ${pxToRem(72)};
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(64)};
    line-height: 44px;
  }

  @media (max-width: 991px) {
    font-size: ${pxToRem(32)};
    line-height: 24px;
    width: 100%;
    max-width: 320px;
    text-align: center;
    grid-gap: 30px;
  }
`
const TitleQuotes = styled.div`
  position: relative;
  width: 60%;
  height: 7px;
  opacity: 0.2;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
    bottom: -10px;
  }
`
const Prefix = styled(TitleQuotes)`
  justify-self: end;
  background: linear-gradient(to right, transparent, white);
  margin-bottom: 10px;

  @media (max-width: 991px) {
    display: none;
  }
`
const Suffix = styled(TitleQuotes)`
  background: linear-gradient(to right, white, transparent);

  @media (max-width: 991px) {
    background: linear-gradient(to right, transparent, white);
    width: 100%;
  }
`
const PartnersContainer = styled.div`
  background: linear-gradient(to right, #0e032e, transparent);
  padding: 24px 68px;
  display: flex;
  gap: 24px;
  align-items: center;
  border-radius: 10px;

  .navy-esports {
    transform: translateX(-20px);
  }

  @media (max-width: 1399px) {
    .steam {
      max-width: 40px;
    }

    .valve {
      max-width: 100px;
    }

    .coinlist,
    .fnatic {
      max-width: 150px;
    }

    .navy-esports {
      max-width: 200px;
    }
  }

  @media (max-width: 1199px) {
    .steam {
      max-width: 34px;
    }

    .valve {
      max-width: 80px;
    }

    .coinlist,
    .fnatic {
      max-width: 120px;
    }

    .navy-esports {
      max-width: 170px;
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 36px 20px;
    width: min(450px, 100%);
    gap: 8px;

    .steam,
    .valve,
    .coinlist,
    .fnatic,
    .navy-esports {
      max-width: calc(100% - 54px);
    }

    .navy-esports {
      transform: none;
    }
  }
`
const Separator = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: white;

  @media (max-width: 991px) {
    display: none;
  }
`
