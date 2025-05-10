import { FC } from 'react'
import styled from 'styled-components'
import MarketplaceImgUrl from '../../assets/large-images/marketplace.png?url'
import MarketplaceLogoUrl from '../../assets/logo/marketplace-logo.png?url'
import { pxToRem } from '../../utils/font.ts'
import { PinkSpan, SectionTitle } from './styles.ts'

export const Marketplace: FC = () => {
  return (
    <ScreenContainer>
      <ContentWrapper>
        <MarketplaceImg src={MarketplaceImgUrl} />
        <TitleWrapper>
          <Title>MARKETPLACE</Title>
          <TitleSuffix />
        </TitleWrapper>
        <Description1>
          <QuoteWrapper>
            <PrefixQuote />
            <Description className={'info-1'}>
              MARKETPLACE for the sale and purchase of NFTs used in the <PinkSpan>CS arena eco system</PinkSpan>
            </Description>
            <SuffixQuote />
          </QuoteWrapper>
          <TokenInfo>
            <Subtitle>
              <MarketplaceLogo src={MarketplaceLogoUrl} />
              <span>WHAT IS CS TOKEN?</span>
            </Subtitle>
            <Description className={'info-2'}>
              <PinkSpan>CYBER SPORT</PinkSpan> TOKENS is advanced version of play to earn projects
            </Description>
          </TokenInfo>
        </Description1>
        <Description2>
          <ComingSoonWrapper>
            <ComingSoonDescription>COMING SOON!</ComingSoonDescription>
            <ComingSoonSuffix />
          </ComingSoonWrapper>
          <Description className={'info-3'}>
            CYBER SPORTS WORKS WITH <PinkSpan>HYBRID VERSION</PinkSpan> artificial intelligence and give possibility to
            our users to make money by playing your favorite games such as <PinkSpan>CS GO, Dota2</PinkSpan> and others
          </Description>
        </Description2>
      </ContentWrapper>
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  min-height: calc(100vh - 240px);
  display: grid;
  place-content: center;
  place-items: center;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-areas: 'image title title' 'image description1 description2' 'image description1 description2';
  grid-template-columns: auto 250px 592px;
  grid-gap: 32px;
  width: fit-content;
  margin: auto;

  @media (max-width: 1399px) {
    grid-template-areas: 'image title' 'image description1' 'image info3' 'coming-soon coming-soon';
    grid-template-columns: auto 592px;
  }

  @media (max-width: 1199px) {
    grid-template-areas: 'image title' 'image description1' 'image info3' 'coming-soon coming-soon';
    grid-template-columns: auto auto;
  }

  @media (max-width: 991px) {
    grid-template-areas: 'title title' 'info1 info1' 'info2 info2' 'image info3' 'image coming-soon';
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 739px) {
    grid-template-areas: 'title title' 'info1 info1' 'info2 info2' 'image info3' 'coming-soon coming-soon';
    grid-template-columns: 1fr 1fr;
  }
`

const MarketplaceImg = styled.img`
  grid-area: image;
  margin-right: -16px;

  @media (max-width: 991px) {
    width: 100%;
  }
`

const MarketplaceLogo = styled.img`
  display: none;

  @media (max-width: 991px) {
    display: block;
  }
`

const TitleWrapper = styled.div`
  grid-area: title;
  padding-top: 28px;
  width: fit-content;

  @media (max-width: 1399px) {
    align-self: end;
  }

  @media (max-width: 991px) {
    align-self: center;
    padding-top: 0;
    margin: auto;
  }
`
const Title = styled(SectionTitle)``
const TitleSuffix = styled.div`
  position: relative;
  height: 14px;
  opacity: 0.2;
  background: linear-gradient(to right, transparent, white);
  margin: 20px 0 10px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
    bottom: -10px;
  }

  @media (max-width: 991px) {
    display: none;
  }
`

const QuoteWrapper = styled.div`
  grid-area: info1;
  display: contents;

  @media (max-width: 499px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`
const PrefixQuote = styled(TitleSuffix)`
  display: none;

  @media (max-width: 499px) {
    margin-top: 0;
    display: block;
  }
`
const SuffixQuote = styled(TitleSuffix)`
  display: none;

  @media (max-width: 499px) {
    margin-top: 0;
    display: block;
    background: linear-gradient(to right, white, transparent);
  }
`

const Description1 = styled.div`
  grid-area: description1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 14px;

  @media (max-width: 1399px) {
    padding-bottom: 0;
  }

  @media (max-width: 991px) {
    display: contents;
  }
`
const Description2 = styled.div`
  grid-area: description2;
  @media (max-width: 1399px) {
    display: contents;
  }
`
const TokenInfo = styled.div`
  grid-area: info2;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1399px) {
    gap: 12px;
  }

  @media (max-width: 991px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 519px) {
    align-items: start;
    text-align: left;
  }
`
const Subtitle = styled(SectionTitle)`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: ${pxToRem(42)};

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

const Description = styled.div`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(18)};
  color: #fff;

  &.info-1 {
    grid-area: info1;

    @media (max-width: 991px) {
      text-align: center;
    }

    @media (max-width: 739px) {
      max-width: 428px;
      margin: auto;
    }

    @media (max-width: 499px) {
      text-align: left;
    }
  }

  &.info-2 {
    grid-area: info2;

    @media (max-width: 519px) {
      max-width: 372px;
    }
  }

  &.info-3 {
    grid-area: info3;
    align-self: start;

    @media (max-width: 991px) {
      align-self: end;
    }

    @media (max-width: 739px) {
      align-self: center;
    }
  }
`
const ComingSoonWrapper = styled.div`
  grid-area: coming-soon;
`
const ComingSoonDescription = styled.div`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(140)};
  font-weight: bold;
  line-height: 0.8;
  color: rgba(255, 184, 3, 0.3);

  @media (max-width: 1919px) {
    font-size: ${pxToRem(120)};
    text-align: center;
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(100)};
  }
`
const ComingSoonSuffix = styled.div`
  position: relative;
  height: 14px;
  width: 80%;
  opacity: 0.2;
  background: linear-gradient(to right, white, transparent);
  margin: 16px 0 20px;

  @media (max-width: 1919px) {
    display: none;
  }
`
