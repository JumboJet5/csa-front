import { FC } from 'react'
import styled from 'styled-components'
import MoneyIcon from '../../assets/common/money.svg?react'
import RecordIcon from '../../assets/common/record.svg?react'
import SteamIcon from '../../assets/common/steam.svg?react'
import HowToStartImgUrl from '../../assets/large-images/how-to-start-img.png?url'
import { pxToRem } from '../../utils/font.ts'
import { ListItem, ListWrapper, PinkSpan, SectionTitle, Separator } from './styles.ts'

export const HowToStart: FC = () => {
  return (
    <ScreenContainer>
      <HowToStartImg src={HowToStartImgUrl} />
      <TextContainer>
        <Title>HOW SIMPLY</Title>
        <Subtitle>TO START MAKING MONEY</Subtitle>
        <StepsWrapper>
          <StepWrapper>
            <StepNumber>01</StepNumber>
            <SteamIcon />
            <span>
              You connect your <PinkSpan>Steam account</PinkSpan> to our program
            </span>
          </StepWrapper>
          <StepWrapper>
            <StepNumber>02</StepNumber>
            <RecordIcon />
            <span>
              We will <PinkSpan>record</PinkSpan> all statistics and all moves which you made while you were playing
            </span>
          </StepWrapper>
          <StepWrapper>
            <StepNumber>03</StepNumber>
            <MoneyIcon />
            <span>
              For good games and good connection with your team you <PinkSpan>will earn</PinkSpan> tokens <br />
              which you can spend on skins, tickets for cyber sport events or <PinkSpan>exchange</PinkSpan> them to USDT
            </span>
          </StepWrapper>
        </StepsWrapper>

        <Subtitle>TO RECEIVE AIRDROP YOU NEED</Subtitle>
        <ListWrapper>
          <ListItem>
            Subscribe on <PinkSpan>Twitter</PinkSpan> and make <PinkSpan>sharing</PinkSpan> of the last post
          </ListItem>
          <ListItem>
            Subscribe on <PinkSpan>Telegram</PinkSpan> 1,2,3
          </ListItem>
          <ListItem>
            Subscribe on <PinkSpan>Discord</PinkSpan>
          </ListItem>
          <ListItem>
            Mint <PinkSpan>NFT</PinkSpan> in our marketplace (one wallet 1NFT)
          </ListItem>
        </ListWrapper>
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

  @media (max-width: 1919px) {
    grid-gap: 64px;
  }

  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`

const HowToStartImg = styled.img`
  justify-self: right;
  width: 100%;

  @media (max-width: 1399px) {
    max-width: 400px;
  }

  @media (max-width: 1199px) {
    justify-self: center;
    grid-row: 2 / 3;
    max-width: 500px;
  }
`

const TextContainer = styled.div`
  justify-self: left;
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${Separator} {
    margin: 30px 0;
  }

  @media (max-width: 991px) {
    justify-self: center;

    ${Separator} {
      margin: 16px 0;
    }
  }
`

const Subtitle = styled(SectionTitle)`
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
    text-align: center;
  }
`

const Title = styled(SectionTitle)`
  display: flex;
  align-items: center;

  @media (max-width: 499px) {
    text-align: center;
    display: block;
  }
`

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StepWrapper = styled.div`
  background: linear-gradient(to right, #0e0221, transparent);
  padding: 21px 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;

  font-family: Achivo, sans-serif;
  font-size: ${pxToRem(18)};
  line-height: 24px;

  svg {
    position: relative;
    left: -14px;
    min-width: 24px;
  }

  @media (max-width: 1399px) {
    br {
      display: none;
    }
  }

  @media (max-width: 499px) {
    font-size: ${pxToRem(12)};
    line-height: 12px;
    gap: 12px;
    margin: 0 -16px;
    padding: 8px 16px;
    svg {
      left: 0;
    }
  }
`

const StepNumber = styled.span`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(48)};
  font-weight: 800;
  line-height: 24px;
  opacity: 0.1;

  @media (max-width: 767px) {
    display: none;
  }
`
