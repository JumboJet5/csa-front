import { FC, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import GradientCornerUrl from '../../assets/nft/gradient-corner.png?url'
import Nft1_0Url from '../../assets/nft/nft-1_0.png?url'
import Nft1_1Url from '../../assets/nft/nft-1_1.png?url'
import Nft1_2Url from '../../assets/nft/nft-1_2.png?url'
import Nft2_0Url from '../../assets/nft/nft-2_0.png?url'
import Nft2_1Url from '../../assets/nft/nft-2_1.png?url'
import Nft2_2Url from '../../assets/nft/nft-2_2.png?url'
import Nft3_0Url from '../../assets/nft/nft-3_0.png?url'
import Nft3_1Url from '../../assets/nft/nft-3_1.png?url'
import Nft3_2Url from '../../assets/nft/nft-3_2.png?url'
import Nft4_0Url from '../../assets/nft/nft-4_0.png?url'
import Nft4_1Url from '../../assets/nft/nft-4_1.png?url'
import Nft4_2Url from '../../assets/nft/nft-4_2.png?url'
import Nft5_0Url from '../../assets/nft/nft-5_0.png?url'
import Nft5_1Url from '../../assets/nft/nft-5_1.png?url'
import Nft5_2Url from '../../assets/nft/nft-5_2.png?url'
import Nft6_0Url from '../../assets/nft/nft-6_0.png?url'
import Nft6_1Url from '../../assets/nft/nft-6_1.png?url'
import Nft6_2Url from '../../assets/nft/nft-6_2.png?url'
import Nft7_0Url from '../../assets/nft/nft-7_0.png?url'
import Nft7_1Url from '../../assets/nft/nft-7_1.png?url'
import Nft7_2Url from '../../assets/nft/nft-7_2.png?url'
import NftSignLines from '../../assets/nft/nft-sign-lines.svg?url'
import NftSignMask from '../../assets/nft/nft-sign-mask.svg?react'
import { WithClassName } from '../../core'
import { nftLevelCost, NftLevelEnum } from '../../core/enums'
import { pxToRem } from '../../utils/font.ts'

export const nftImages: Record<NftLevelEnum, { image: string[]; shadowColor: string; nftSignColor: string }> = {
  [NftLevelEnum.LVL1]: { image: [Nft1_0Url, Nft1_1Url, Nft1_2Url], shadowColor: '#2DBA99', nftSignColor: '#2AB997' },
  [NftLevelEnum.LVL2]: { image: [Nft2_0Url, Nft2_1Url, Nft2_2Url], shadowColor: '#2EBAE7', nftSignColor: '#2B9CF1' },
  [NftLevelEnum.LVL3]: {
    image: [Nft3_0Url, Nft3_1Url, Nft3_2Url],
    shadowColor: '#3E89FA',
    nftSignColor: '#2B9CF1 23%, #2BF1B6 77%',
  },
  [NftLevelEnum.LVL4]: {
    image: [Nft4_0Url, Nft4_1Url, Nft4_2Url],
    shadowColor: '#38C7B6',
    nftSignColor: '#2B9CF1 23%, #C95AFE, #2BF1B6 77%',
  },
  [NftLevelEnum.LVL5]: {
    image: [Nft5_0Url, Nft5_1Url, Nft5_2Url],
    shadowColor: '#BF3499',
    nftSignColor: '#2B9EF1 19%, #8438FF 33%, #CB38FF 57%',
  },
  [NftLevelEnum.LVL6]: {
    image: [Nft6_0Url, Nft6_1Url, Nft6_2Url],
    shadowColor: '#FF9901',
    nftSignColor: '#2BCDF1 23%, #D52BF1, #FDCD24 77%',
  },
  [NftLevelEnum.LVL7]: { image: [Nft7_0Url, Nft7_1Url, Nft7_2Url], shadowColor: '#8322ff', nftSignColor: '#BE53FF' },
}

export const NftCard: FC<{ level: NftLevelEnum; index: number }> = ({ level, index }) => {
  const [prevNfts, setPrevNfts] = useState<{ level: NftLevelEnum; index: number; id: number }[]>([])
  const [currentNft, setCurrentNft] = useState(() => ({ level, index }))

  useEffect(() => {
    if (currentNft.level === level && currentNft.index === index) return

    setCurrentNft({ level, index })

    const id = Date.now()
    setPrevNfts((prev) => [...prev, { ...currentNft, id }])
    setTimeout(() => setPrevNfts((prev) => prev.filter((item) => item.id !== id)), 500)
  }, [level, index])

  return (
    <NftCardContainer>
      <NftSignMask className={'hidden-svg'} />
      <NftCornerShadow shadowColor={nftImages[level].shadowColor} />
      <CornerContent src={GradientCornerUrl} />
      <NftPurchaseImage level={currentNft.level} index={currentNft.index} />
      {prevNfts.map((item) => (
        <NftPurchaseImage key={item.id} level={item.level} index={item.index} className={'prev'} />
      ))}
    </NftCardContainer>
  )
}

const priceParser = (value: bigint, decimals = 2) => {
  if (!value) return 'FREE'
  const divider = BigInt(10 ** decimals)
  const dollars = value / divider
  const cents = value % divider
  return `$${dollars}.${cents}`
}

const NftPurchaseImage: FC<WithClassName & { level: NftLevelEnum; index: number }> = ({ index, level, className }) => {
  return (
    <NftPurchaseImageWrapper className={className}>
      <NftImage src={nftImages[level].image[index]} />
      <NftPriceLabel>
        <NftLevelSpan>LEVEL</NftLevelSpan>
        <NftLevel>0{level + 1}</NftLevel>
        <NftPrice>{priceParser(nftLevelCost[level])}</NftPrice>
      </NftPriceLabel>
      <NftSign bgColor={nftImages[level].nftSignColor}>
        <img src={NftSignLines} />
      </NftSign>
    </NftPurchaseImageWrapper>
  )
}

const NftCardContainer = styled.div`
  position: relative;
  min-width: 406px;
  min-height: 406px;

  .hidden-svg {
    position: absolute;
  }

  @media (max-width: 499px) {
    min-width: calc(100vw - 40px);
    min-height: calc(100vw - 40px);
    width: 100%;
  }
`
const NftCornerShadow = styled.div.attrs<{ shadowColor: string }>(({ shadowColor }) => ({ shadowColor }))<{
  shadowColor: string
}>`
  position: absolute;
  top: 0;
  right: -60px;
  width: 300px;
  height: 200px;
  border-radius: 50%;
  background: ${(props) => props.shadowColor};
  filter: blur(52px);
  transform: rotate(135deg);
  user-select: none;
  pointer-events: none;

  transition: background 0.3s ease-in-out;
`
const prevCardDisapire = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    opacity: 1;
  }

  30% {
    transform: rotateX(0deg) rotateY(65deg) rotateZ(-25deg);
    opacity: 0;
  }

  100% {
    transform: rotateX(0deg) rotateY(65deg) rotateZ(-25deg);
    opacity: 0;
  }
`
const NftPurchaseImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &.prev {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0 65%;

    animation: ${prevCardDisapire} ease-out 1s;
  }
`
const NftImage = styled.img`
  width: 100%;
  position: relative;
`
const NftPriceLabel = styled.div`
  position: absolute;
  right: 0;
  bottom: 34px;
  height: 64px;
  width: 364px;
  box-sizing: border-box;
  background: linear-gradient(to right, #0d0a114d, #0d0a11 80%);
  padding-left: 26px;
  padding-right: 32px;

  display: flex;
  align-items: center;

  font-family: Changa, sans-serif;
  font-size: ${pxToRem(23)};
  font-weight: 800;

  @media (max-width: 499px) {
    width: calc(100% - 42px);
    font-size: ${pxToRem(18)};
    padding-right: 24px;
  }
`
const NftLevelSpan = styled.span`
  margin-top: 6px;
`
const NftLevel = styled.span`
  font-size: ${pxToRem(48)};
  margin-left: 6px;

  @media (max-width: 499px) {
    font-size: ${pxToRem(42)};
  }
`
const NftPrice = styled.span`
  font-size: ${pxToRem(32)};
  color: #edcd3a;
  margin-left: auto;

  @media (max-width: 499px) {
    font-size: ${pxToRem(24)};
  }
`
const NftSign = styled.div.attrs<{ bgColor: string }>(({ bgColor }) => ({ bgColor }))<{ bgColor: string }>`
  position: absolute;
  bottom: 14px;
  right: 285px;
  width: 92px;
  height: 104px;
  background: linear-gradient(202deg, ${(props) => props.bgColor});
  clip-path: url(#nft-sign-mask);
  padding: 6px;
  box-sizing: border-box;

  @media (max-width: 499px) {
    right: calc(100% - 112px);
  }
`

const CornerContent = styled.img`
  position: absolute;
  top: -12px;
  right: -12px;
`
