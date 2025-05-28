import classNames from 'classnames'
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react'
import styled from 'styled-components'
import DownArrow from '../../assets/common/down-arrow.svg?react'
import { nftLevelCost, NftLevelEnum, nftLevels } from '../../core/enums'
import { pxToRem } from '../../utils/font.ts'

const nftLevelLabelParser = (value: NftLevelEnum) => {
  return `LEVEL 0${value + 1}`
}
const priceParser = (value: bigint, decimals = 2) => {
  if (!value) return 'FREE'
  const divider = BigInt(10 ** decimals)
  const dollars = value / divider
  const cents = value % divider
  return `$${dollars}.${cents}`
}

export const NftLevelSelector: FC<{ nftLvl: NftLevelEnum; setNftLvl: Dispatch<SetStateAction<NftLevelEnum>> }> = ({
  nftLvl,
  setNftLvl,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSelector = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <NftSelectorContainer className={classNames({ open: isOpen })} onClick={toggleSelector}>
      <SelectedNftLevelWrapper>
        <div>{nftLevelLabelParser(nftLvl)}</div>
        <Separator />
        <NftLevelPriceLabel level={nftLvl} />
      </SelectedNftLevelWrapper>
      <DownArrow className={'arrow'} />
      <OpenSelectorWrapper>
        <NftSelectHint>SELECT NFT LEVEL</NftSelectHint>
        <NftLevelOptionsWrapper>
          {nftLevels.map((lvl) => (
            <NftLevelOptionRow
              key={lvl}
              onClick={() => setNftLvl(lvl)}
              className={classNames({ chosen: lvl === nftLvl })}
            >
              <div>{nftLevelLabelParser(lvl)}</div>
              <Separator />
              <NftLevelPriceLabel level={lvl} />
            </NftLevelOptionRow>
          ))}
        </NftLevelOptionsWrapper>
      </OpenSelectorWrapper>
    </NftSelectorContainer>
  )
}

const NftLevelPriceLabel: FC<{ level: NftLevelEnum }> = ({ level }) => {
  return (
    <PriceLabel className={classNames({ free: !nftLevelCost[level] })}>{priceParser(nftLevelCost[level])}</PriceLabel>
  )
}

const NftSelectorContainer = styled.div`
  --selector-height: 64px;
  position: relative;
  height: var(--selector-height);
  max-width: 300px;
  min-width: 100px;
  width: 100%;
  box-sizing: border-box;

  font-family: Archive, sans-serif;
  font-size: ${pxToRem(14)};
  font-weight: 500;
  cursor: pointer;

  .arrow {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
  }

  &.open .arrow {
    transform: translateY(-50%) rotateY(180deg);
  }
`

const SelectedNftLevelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 100%;
  padding: 0 32px;
  border: 1px #8b898999 solid;
  border-radius: 32px;

  ${NftSelectorContainer}.open & {
    display: none;
  }
`
const Separator = styled.div`
  background-color: #595659;
  height: 14px;
  width: 1px;
`
const PriceLabel = styled.div`
  font-weight: 800;
  color: #edcd3a;

  &.free {
    color: #2dba98;
  }
`
const OpenSelectorWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: none;
  border: 1px #8b898999 solid;
  background-color: #00000099;
  border-radius: 32px;
  padding-bottom: 24px;
  z-index: 10;

  ${NftSelectorContainer}.open & {
    display: flex;
    flex-direction: column;
  }
`
const NftSelectHint = styled.div`
  display: flex;
  align-items: center;
  height: var(--selector-height);
  padding: 0 56px 0 32px;
`
const NftLevelOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const NftLevelOptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 4px 32px;

  &:hover,
  &.chosen {
    background-color: #6d1c5c;

    ${Separator} {
      background-color: white;
    }
  }
`
