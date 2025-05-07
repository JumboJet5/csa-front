import { FC } from 'react'
import styled from 'styled-components'
import AboutTokenImgUrl from '../../assets/large-images/about-token-img.png?url'
import LogoIcon from '../../assets/logo/icon-logo.svg?react'
import { pxToRem } from '../../utils/font.ts'
import { ListItem, ListWrapper, SectionTitle, Separator } from './styles.ts'

export const AboutToken: FC = () => {
  return (
    <ScreenContainer>
      <TextContainer>
        <Title>ABOUT</Title>
        <Subtitle>
          <LogoIcon />
          <span>CS TOKEN</span>
        </Subtitle>
        <Separator />
        <ListWrapper>
          <ListItem>Used as a reward for players</ListItem>
          <ListItem>For purchases on the Marketplace</ListItem>
          <ListItem>Payment of the registration fee for participation in the Championship.</ListItem>
          <ListItem>Prize pool at the Championship</ListItem>
          <ListItem>Buying tickets to the Championship</ListItem>
          <ListItem>Payment for training at the Academy</ListItem>
          <ListItem>And other purchases within the Ecosystem</ListItem>
        </ListWrapper>
      </TextContainer>
      <AboutTokenImg src={AboutTokenImgUrl} />
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

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`

const AboutTokenImg = styled.img`
  justify-self: left;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 500px;
    justify-self: center;
  }
`

const TextContainer = styled.div`
  justify-self: right;
  width: 100%;
  max-width: 464px;

  ${Separator} {
    margin: 30px 0;
  }

  @media (max-width: 1399px) {
    max-width: 412px;
  }

  @media (max-width: 991px) {
    justify-self: center;

    ${Separator} {
      margin: 16px 0;
    }
  }
`

const Title = styled.h2`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(42)};
  font-weight: bold;
  line-height: 50px;
  margin: 0;
  color: white;
  text-shadow: 0 0 25px white;
  opacity: 0.4;
  text-align: right;

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
  display: flex;
  align-items: center;
  justify-content: right;

  svg {
    margin-right: 14px;

    @media (max-width: 991px) {
      width: 64px;
    }

    @media (max-width: 767px) {
      width: 52px;
    }

    @media (max-width: 499px) {
      width: 48px;
    }
  }
`
