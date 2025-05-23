import classNames from 'classnames'
import copy from 'copy-to-clipboard'
import { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import ChainIcon from '../../assets/common/chain-icon.svg?react'
import ColoredNftIcon from '../../assets/common/colored-nft-icon.svg?react'
import CopyIcon from '../../assets/common/copy.svg?react'
import FlameIcon from '../../assets/common/flame.svg?react'
import HeartIcon from '../../assets/common/heart.svg?react'
import NftIcon from '../../assets/common/nft-icon.svg?react'
import ReferralIcon from '../../assets/common/referral-icon.svg?react'
import StarIcon from '../../assets/common/star.svg?react'
import UserIcon from '../../assets/common/user-icon.svg?react'
import NftLevel2Url from '../../assets/nft/nft-level2_0.png?url'
import NftLevel5Url from '../../assets/nft/nft-level5_0.png?url'
import { pxToRem } from '../../utils/font.ts'
import { commonSuccessToast } from '../../utils/toast.tsx'

type FilterType = 'new' | 'hot' | 'favourite' | 'owned' | 'rewards'
export const NftList: FC = () => {
  const [filterType, setFilterType] = useState<FilterType>('new')

  const onCopy = useCallback(() => {
    copy('fjty371x')
    commonSuccessToast('Referral link copied!')
  }, [])

  return (
    <NftListContainer>
      <NftFilterRow>
        <NftFilterRowWrapper>
          <NftFilterLabel onClick={() => setFilterType('new')} className={classNames({ active: filterType === 'new' })}>
            <StarIcon className={'star-icon'} />
            <span>NEW</span>
          </NftFilterLabel>
          <NftFilterLabel onClick={() => setFilterType('hot')} className={classNames({ active: filterType === 'hot' })}>
            <FlameIcon className={'flame-icon'} />
            <span>HOT</span>
          </NftFilterLabel>
          <NftFilterLabel
            onClick={() => setFilterType('favourite')}
            className={classNames({ active: filterType === 'favourite' })}
          >
            <HeartIcon className={'heart-icon'} />
            <span>FAVORITE</span>
          </NftFilterLabel>
          <NftFilterLabel
            onClick={() => setFilterType('owned')}
            className={classNames({ active: filterType === 'owned' })}
          >
            <NftIcon className={'nft-icon'} />
            <span>MY NFT</span>
          </NftFilterLabel>
          <NftFilterLabel
            onClick={() => setFilterType('rewards')}
            className={classNames({ active: filterType === 'rewards' })}
          >
            <ReferralIcon className={'rewards-icon'} />
            <span>MY REWARDS</span>
          </NftFilterLabel>
        </NftFilterRowWrapper>
        <ReferralLinkButton onClick={onCopy}>
          <ChainIcon /> <span>REFERRAL LINK:</span> <Yellow>fjty371x</Yellow> <CopyIcon />
        </ReferralLinkButton>
      </NftFilterRow>
      <NftListWrapper>
        <NftCard imgUrl={NftLevel2Url} level={2} />
        <NftCard imgUrl={NftLevel5Url} level={5} />
        <NftCard imgUrl={NftLevel2Url} level={2} />
        <NftCard imgUrl={NftLevel5Url} level={5} />
      </NftListWrapper>
    </NftListContainer>
  )
}

const NftCard: FC<{ imgUrl: string; level: number }> = ({ imgUrl, level }) => {
  const [isFavourite, setIsFavourite] = useState(false)
  const toggleIsFavourite = useCallback(() => setIsFavourite((prev) => !prev), [])

  return (
    <NftInfoCard>
      <NftFavouriteIconWrapper onClick={toggleIsFavourite} className={classNames({ active: isFavourite })}>
        <HeartIcon />
      </NftFavouriteIconWrapper>
      <img src={imgUrl} />
      <NftInfoWrapper>
        <NftGeneralInfoRow>
          <NftNameContainer>
            <ColoredNftIcon />
            <div>
              NFT <Yellow>{level}</Yellow> lvl with very long name in fully complete three lines <Gray>(00001)</Gray>
            </div>
          </NftNameContainer>
          <NftPurchaseDetailsWrapper>
            <div>
              256.23 <Thin>USDT</Thin>
            </div>
            <Thin>
              <Gray>30.10.23</Gray>
            </Thin>
          </NftPurchaseDetailsWrapper>
        </NftGeneralInfoRow>
        <NftMintDetailsWrapper>
          <NftUserLabel>
            <UserIcon className={'yellow'} />
            <NftUserLabelTitle>Owner:</NftUserLabelTitle>
            <NftUserLabelName>Vladimir Parhomenko</NftUserLabelName>
          </NftUserLabel>
          <NftUserLabel>
            <UserIcon className={'pink'} />
            <NftUserLabelTitle>Minted by:</NftUserLabelTitle>
            <NftUserLabelName>Pavel Sorokih</NftUserLabelName>
          </NftUserLabel>
        </NftMintDetailsWrapper>
      </NftInfoWrapper>
    </NftInfoCard>
  )
}

const NftListContainer = styled.div`
  grid-area: list;
`
const NftFilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`

const NftFilterRowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`

const NftFilterLabel = styled.button`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 40px;
  border: none;
  background-color: transparent;

  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: ${pxToRem(14)};

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  svg {
    color: #65606c;
  }

  &:hover,
  &:active,
  &.active {
    background-color: #3c334b;

    svg {
      color: var(--active-color);
    }
  }

  .star-icon {
    --active-color: #edcb3c;
  }

  .flame-icon {
    --active-color: #d24e07;
  }

  .heart-icon {
    --active-color: #ff0245;
  }

  .nft-icon {
    height: 15px;
    transform: translateY(2.5px);
    --active-color: #ff029a;
  }

  .rewards-icon {
    --active-color: #09cb13;
  }
`

const ReferralLinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 40px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #3c334b;
  }

  svg:first-child {
    color: #65606c;
  }

  svg:last-child {
    color: #f1dc24;
  }
`

const NftListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  margin-top: 20px;
  max-height: 380px;
  overflow: auto;
  padding-bottom: 16px;

  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d933;
    border-radius: 10px;
  }

  @media (max-width: 1199px) {
    margin: 20px -16px 0;
    padding: 0 16px 16px;
  }
`
const NftInfoCard = styled.div`
  flex: 0 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
`

const NftInfoWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 24px;
  background-color: #140a22;
  transform: translateY(100%);
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  box-shadow: 0px 0px 0px transparent;

  ${NftInfoCard}:hover & {
    box-shadow: 0px -8px 57px #ff00c7;
    transform: translateY(0%);
  }
`

const NftGeneralInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`
const NftNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  max-width: 196px;

  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: ${pxToRem(14)};

  svg {
    width: 24px;
    flex: 0 0 24px;
  }
`
const NftPurchaseDetailsWrapper = styled.div`
  min-width: 88px;
  text-align: right;

  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: ${pxToRem(12)};
`

const NftMintDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const NftUserLabel = styled.div`
  display: grid;
  grid-template-areas: 'title title' 'icon name';

  font-family: Archivo, sans-serif;
  font-weight: 300;
  font-size: ${pxToRem(12)};

  svg {
    width: 17px;
    height: 16px;
    grid-area: icon;

    &.yellow {
      color: #f1dc24;
    }

    &.pink {
      color: #ef54b4;
    }
  }
`

const NftUserLabelTitle = styled.div`
  grid-area: title;
  font-weight: 600;
  color: #ffffff4d;
`
const NftUserLabelName = styled.div`
  grid-area: name;
`
const NftFavouriteIconWrapper = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 40px;
  height: 40px;
  background: #ffffff33;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 13px 12px;
  cursor: pointer;

  &.active {
    background: #fb35cf33;
    color: #fb35cf;
  }

  svg {
    width: 14px;
    height: 16px;
  }
`

const Yellow = styled.span`
  color: #f1dc24;
`

const Gray = styled.span`
  color: #ffffff4d;
`

const Thin = styled.span`
  font-weight: 300;
`
