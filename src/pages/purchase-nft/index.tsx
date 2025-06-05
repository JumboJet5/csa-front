import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import NftIcon from '../../assets/common/nft-icon.svg?react'
import { GradientButton } from '../../components/gradient-button.component.tsx'
import { PointSelector } from '../../components/point-selector.component.tsx'
import { NftLevelEnum } from '../../core/enums'
import { pxToRem } from '../../utils/font.ts'
import { NftCard } from './nft-card.component.tsx'
import { NftLevelSelector } from './nft-level-selector.component.tsx'

export const PurchaseNft: FC = () => {
  const [nftIndex, setNftIndex] = useState(0)
  const [nftLvl, setNftLvl] = useState(NftLevelEnum.LVL1)

  useEffect(() => setNftIndex(0), [nftLvl])

  return (
    <PurchaseNftContainer>
      <LevelRow>
        <NftIcon />
        <span>
          NFT <PinkSpan>{nftLvl + 1}</PinkSpan> LEVEL <GreySpan>(0000{nftIndex + 1})</GreySpan>
        </span>
      </LevelRow>
      <PurchaseCard>
        <NftWrapper>
          <NftCard level={nftLvl} index={nftIndex} />
          <PointSelector size={3} currentIndex={nftIndex} setCurrentIndex={setNftIndex} />
        </NftWrapper>
        <PurchaseDescriptionContent>
          <div>
            <Title>MINT YOUR OWN NFT HERE!</Title>
            <DescriptionContainer>
              <div>
                For registration with <PinkSpan>referral link</PinkSpan> (in case that referral completed Airdrop
                condition) you will get CS tokens in amount <PinkSpan>XXX</PinkSpan>. You will get the reward from those
                referrals who were gained by your referral
              </div>
              <div>
                For registration with <PinkSpan>referral link</PinkSpan> (in case that referral completed Airdrop
                condition) you will get CS tokens in amount <PinkSpan>XXX</PinkSpan>. You will get the reward from those
                referrals who were gained by your referral
              </div>
            </DescriptionContainer>
          </div>
          <ControlRow>
            <NftLevelSelector nftLvl={nftLvl} setNftLvl={setNftLvl} />
            <MintButton>START TO MINT</MintButton>
          </ControlRow>
        </PurchaseDescriptionContent>
      </PurchaseCard>
    </PurchaseNftContainer>
  )
}

const PurchaseNftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 32px auto 40px;
  max-width: 1250px;

  @media (max-width: 1439px) {
    max-width: unset;
    margin: 32px 24px 40px;
  }

  @media (max-width: 599px) {
    margin: 32px 0 40px;
    overflow-x: hidden;
    padding-top: 60px;
    padding-bottom: 120px;
  }
`

const LevelRow = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 56px;

  svg {
    color: #736d7a;
  }

  @media (max-width: 599px) {
    margin-left: 50px;
  }

  @media (max-width: 499px) {
    margin-left: 20px;
  }
`

const PurchaseCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px 44px;
  background-color: #00000099;
  border-radius: 20px;
  padding: 64px 50px 40px;

  font-family: Changa, sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: bold;
  letter-spacing: 1.3px;

  @media (max-width: 1089px) {
    font-size: ${pxToRem(16)};
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 599px) {
    font-size: ${pxToRem(12)};
    border-radius: 0;
    background: linear-gradient(to bottom, #00000099, transparent);
  }

  @media (max-width: 499px) {
    padding: 64px 20px 40px;
  }
`

const PurchaseDescriptionContent = styled.div`
  @media (max-width: 1199px) {
    display: contents;
  }
`

const NftWrapper = styled.div`
  position: relative;
  --y-offset: -80px;
  top: var(--y-offset);
  margin-bottom: var(--y-offset);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`

const Title = styled.h3`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(42)};
  font-weight: bold;
  line-height: 50px;
  letter-spacing: 1.4px;
  margin: 0;
  color: white;
  text-shadow: 0 0 25px currentColor;

  @media (max-width: 1399px) {
    font-size: ${pxToRem(38)};
    line-height: 44px;
  }

  @media (max-width: 1089px) {
    font-size: ${pxToRem(32)};
    line-height: 40px;
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 18px;
`

const ControlRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 54px;
  grid-column: 1 / -1;
  max-width: 720px;
  width: 100%;

  @media (max-width: 1199px) {
    justify-self: center;
    margin-top: 0;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`
const MintButton = styled(GradientButton)`
  width: 100%;
`
const PinkSpan = styled.span`
  color: #e658b8;
`
const GreySpan = styled.span`
  color: #736d7a;
`
