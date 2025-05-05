import { FC } from 'react'
import AboutTokenImgUrl from '../../assets/large-images/about-token-img.png?url'
import LogoIcon from '../../assets/logo/icon-logo.svg?react'
import styled from 'styled-components'
import { pxToRem } from '../../utils/font.ts'

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
  width: 464px;

  @media (max-width: 1399px) {
    width: 412px;
  }

  @media (max-width: 991px) {
    justify-self: center;
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
    font-size: ${pxToRem(36)};
  }
`

const Subtitle = styled.h2`
  text-align: right;
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(84)};
  font-weight: bold;
  line-height: 50px;
  letter-spacing: 1.3px;
  margin: 0;
  color: white;
  text-shadow: 0 0 25px white;

  svg {
    margin-right: 14px;
  }

  @media (max-width: 1399px) {
    font-size: ${pxToRem(72)};
  }
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 30px 0;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ListItem = styled.li`
  position: relative;
  font-family: Archivo, sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 700;
  display: inline-block;
  padding-left: 35px;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e082ff;
  }

  @media (max-width: 1399px) {
    font-size: ${pxToRem(16)};
  }
`
