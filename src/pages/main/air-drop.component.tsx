import { FC } from 'react'
import styled from 'styled-components'
import AirDropImgUrl from '../../assets/large-images/air-drop-img.png?url'
import { pxToRem } from '../../utils/font.ts'
import { ListItem, ListWrapper, PinkSpan, SectionTitle, Separator } from './styles.ts'

export const AirDrop: FC = () => {
  return (
    <ScreenContainer>
      <AirDropImg src={AirDropImgUrl} />
      <TextContainer>
        <Title>AIR DROP</Title>
        <TitleDescription>FOR EARLY PARTICIPANTS</TitleDescription>
        <Separator />
        <Subsection>
          <Subtitle>CONDITIONS FOR AIRDROP:</Subtitle>
          <ListWrapper>
            <ListItem>
              Subscribe to Social <PinkSpan>Networks</PinkSpan>
            </ListItem>
            <ListItem>
              Register yourself in <PinkSpan>LC</PinkSpan>
            </ListItem>
            <ListItem>
              Brand <PinkSpan>NFTs</PinkSpan> (one NFT wallet of each level)
            </ListItem>
            <ListItem>
              Coins must be branded every <PinkSpan>24 hours</PinkSpan>
            </ListItem>
          </ListWrapper>
        </Subsection>
        <Separator />
        <Subsection>
          <Subtitle>ACCRUAL OF COINS DEPENDING ON NFT FOR 24 HOURS:</Subtitle>
          <LevelsListWrapper>
            <ListWrapper>
              <ListItem>1 lvl - 20 coins per day</ListItem>
              <ListItem>2 lvl - 100 coins</ListItem>
              <ListItem>3 lvl - 150 coins</ListItem>
              <ListItem>4 lvl - 250 coins</ListItem>
            </ListWrapper>
            <ListWrapper>
              <ListItem>5 lvl - 400 coins</ListItem>
              <ListItem>6 lvl - 150 coins</ListItem>
              <ListItem>7 lvl - 150 coins</ListItem>
            </ListWrapper>
          </LevelsListWrapper>
        </Subsection>
      </TextContainer>
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

  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`

const AirDropImg = styled.img`
  justify-self: left;
  width: 100%;

  @media (max-width: 1199px) {
    max-width: 500px;
    justify-self: center;
    grid-row: 2 / 3;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 535px;

  justify-self: center;

  @media (max-width: 767px) {
    max-width: 420px;
    gap: 8px;
  }
`

const Title = styled(SectionTitle)``
const TitleDescription = styled(SectionTitle)`
  margin-top: -6px;
  font-size: ${pxToRem(42)};
  height: unset;

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
const Subtitle = styled(SectionTitle)`
  color: #ef54b3;
  font-size: ${pxToRem(32)};
  display: flex;
  align-items: center;
  height: unset;
  line-height: 36px;

  @media (max-width: 1399px) {
    font-size: ${pxToRem(30)};
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(28)};
    line-height: 44px;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(24)};
    line-height: 24px;
  }

  @media (max-width: 499px) {
    font-size: ${pxToRem(20)};
    line-height: 24px;
  }
`
const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 767px) {
    gap: 6px;
  }
`
const LevelsListWrapper = styled.div`
  display: flex;
  gap: 60px;
`
