import { FC } from 'react'
import styled from 'styled-components'
import NftIcon from '../../assets/common/nft-icon.svg?react'
import NftLevel2Url from '../../assets/nft/nft-level2_0.png?url'
import { pxToRem } from '../../utils/font.ts'

export const Airdrop: FC = () => {
  return (
    <AirdropContainer>
      <AirdropRulesWrapper>
        <AirdropTitle>HOW TO RECEIVE AIRDROP</AirdropTitle>
        <ListWrapper>
          <ListItem>
            Follow on <Pink>Twitter</Pink> and share the <Pink>latest post</Pink>
          </ListItem>
          <ListItem>
            Subscribe to the <Pink>Telegram</Pink> channel
          </ListItem>
          <ListItem>
            Subscribe to <Pink>Discord</Pink>
          </ListItem>
          <ListItem>
            Mint <Pink>NFT</Pink> in our <Pink>Marketplace</Pink> (one NFT wallet of each level)
          </ListItem>
        </ListWrapper>
        <AirdropDescription>
          For registering using your <Bold>Referral Link</Bold> (if the referral has fulfilled the Airdrop condition),
          you will receive a <Bold>CS Token</Bold> worth{' '}
          <Bold>
            <Pink>20%</Pink>
          </Bold>{' '}
          of tokens and{' '}
          <Bold>
            <Pink>5%</Pink>
          </Bold>{' '}
          for level 2 referrals.
        </AirdropDescription>
      </AirdropRulesWrapper>
      <LastNftContainer>
        <Subtitle>
          <NftIcon />
          <span>YOUR LAST PURCHASED NFT</span>
        </Subtitle>
        <LastNft src={NftLevel2Url} />
        <LastNftDetails>
          <div>
            <Yellow>256.23</Yellow> <span>USDT</span>
          </div>
          <LastNftDate>30.10.23</LastNftDate>
        </LastNftDetails>
      </LastNftContainer>
    </AirdropContainer>
  )
}

const AirdropContainer = styled.div`
  grid-area: airdrop;
  background-color: #0e0a1399;
  border-radius: 5px;
  padding: 0 18px 14px;

  @media (max-width: 1439px) {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: transparent;
  }

  @media (max-width: 1199px) {
    margin: auto;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const AirdropRulesWrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #1e062f;
  padding: 16px;
  border-radius: 20px;
  box-shadow: inset 0px 1px 0px #ffffff40;

  @media (max-width: 1439px) {
    max-width: 268px;
    margin-top: 16px;
  }

  & > * {
    z-index: 1;
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    left: -50%;
    top: -272px;
    width: 200%;
    height: 300px;
    background: #ef54b4;
    border-radius: 50%;
    filter: blur(200px);
    z-index: 0;
  }
`

const AirdropTitle = styled.h3`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(16)};
  color: #fff;
  text-shadow: 0 0 7px #ef54b4;
  text-align: center;
  margin: 18px 0;
`

const AirdropDescription = styled.div`
  font-family: Archivo, sans-serif;
  font-weight: 300;
  font-size: ${pxToRem(12)};
  color: #fff;
  margin: 16px 0 0;
  letter-spacing: 0.6px;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ListItem = styled.li`
  position: relative;
  font-family: Archivo, sans-serif;
  font-size: ${pxToRem(14)};
  font-weight: 700;
  display: inline-block;
  padding-left: 29px;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 6px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e082ff;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(12)};
    padding-left: 23px;
    &::before {
      top: 5px;
    }
  }
`
const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 24px 0 18px;

  font-family: Archivo, sans-serif;
  font-size: ${pxToRem(16)};
  font-weight: 600;

  svg {
    width: 20px;
    color: #736d7a;
  }
`

const LastNftContainer = styled.div`
  @media (max-width: 1439px) {
    padding: 0 16px 16px;
    background-color: #0e0a1399;
    border-radius: 5px;
  }
`
const LastNft = styled.img`
  width: 100%;

  @media (max-width: 1439px) {
    max-height: 264px;
  }
`

const LastNftDetails = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: Archivo, sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 600;
`
const LastNftDate = styled.div`
  opacity: 0.4;
  font-size: ${pxToRem(14)};
  font-weight: 400;
`

const Pink = styled.span`
  color: #ef54b4;
`
const Yellow = styled.span`
  color: #f1dc24;
`
const Bold = styled.span`
  font-weight: 700;
`
