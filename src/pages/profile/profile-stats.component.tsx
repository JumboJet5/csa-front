import { FC } from 'react'
import styled from 'styled-components'
import TokenIcon from '../../assets/common/cs-token-icon.svg?react'
import NftIcon from '../../assets/common/nft-icon.svg?react'
import ReferralIcon from '../../assets/common/referral-icon.svg?react'
import RewardsIcon from '../../assets/common/rewards-icon.svg?react'
import UserIcon from '../../assets/common/user-icon.svg?react'
import ProfileStatsBgUrl from '../../assets/large-images/profile-stats-bg.png?url'
import { pxToRem } from '../../utils/font.ts'

export const ProfileStats: FC = () => {
  return (
    <ProfileStatsContainer>
      <ReferralsStatsWrapper>
        <ReferralsStatsLevelLabel level={1} childrenCount={'23'} tokenCount={'34566'} />
        <ReferralsStatsLevelLabel level={2} childrenCount={'23'} tokenCount={'34566'} />
      </ReferralsStatsWrapper>
      <UserStatsWrapper>
        <UserIcon className={'user-icon'} />
        <StatsUsername>Vladimir Parhomenko</StatsUsername>
        <UserStatsLabelWrapper>
          <UserStatsLabel>
            <NftIcon className={'label-icon'} />
            <span>46 NFT</span>
          </UserStatsLabel>
          <UserStatsLabel>
            <RewardsIcon className={'label-icon'} />
            <span>23 Rewards</span>
          </UserStatsLabel>
          <UserStatsLabel>
            <TokenIcon className={'label-icon'} />
            <span>300 Coins</span>
          </UserStatsLabel>
        </UserStatsLabelWrapper>
      </UserStatsWrapper>
    </ProfileStatsContainer>
  )
}

const ReferralsStatsLevelLabel: FC<{ childrenCount: string; tokenCount: string; level: 1 | 2 }> = ({
  tokenCount,
  childrenCount,
  level,
}) => {
  const levelTxt = level === 1 ? '1st' : '2nd'
  return (
    <ReferralsStatsLabel>
      <div>
        {levelTxt} <Thin>lvl Referrals</Thin>
      </div>
      <div>
        <ReferralIcon className={'referral-icon'} />
        <span>{childrenCount}</span>
      </div>
      <div>
        <TokenIcon className={'token-icon'} />
        <span>{tokenCount}</span>
      </div>
    </ReferralsStatsLabel>
  )
}

const ProfileStatsContainer = styled.div`
  grid-area: stats;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const ReferralsStatsWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;
`
const ReferralsStatsLabel = styled.div`
  background-color: #0e0a13e5;
  min-height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0 18px;

  font-family: Archivo, sans-serif;
  font-weight: 600;
  font-size: ${pxToRem(16)};
  color: #fff;

  .token-icon,
  .referral-icon {
    margin-right: 8px;
  }

  .token-icon {
    color: #f1dc24;
  }

  .referral-icon {
    color: #cc42ff;
  }
`

const UserStatsWrapper = styled.div`
  display: grid;
  grid-gap: 12px 24px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  align-items: end;
  padding: 36px 60px;
  border-radius: 20px;
  background-color: #000;
  background-image: url(${ProfileStatsBgUrl});
  background-position-y: 490px;

  .user-icon {
    grid-row: 1 / 3;
    color: #f1dc24;
  }

  @media (max-width: 991px) {
    background-position-x: center;
  }

  @media (max-width: 767px) {
    padding: 24px 44px;

    .user-icon {
      max-width: 56px;
    }
  }

  @media (max-width: 559px) {
    padding: 16px 24px;
    grid-gap: 12px;

    .user-icon {
      grid-row: 1 / 2;
      max-width: 24px;
      max-height: 24px;
      justify-self: center;
      align-self: center;
    }
  }
`
const UserStatsLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 559px) {
    grid-column: 1 / 3;
  }
`
const UserStatsLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  color: #fff;

  .label-icon {
    color: #82788f;
    width: 18px;
    height: 18px;
  }

  @media (max-width: 559px) {
    font-size: ${pxToRem(14)};
  }
`

export const StatsUsername = styled.div`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(42)};
  font-weight: bold;
  line-height: 40px;
  letter-spacing: 1.3px;
  margin: 0;
  color: white;
  text-shadow: 0 0 25px currentColor;

  @media (max-width: 767px) {
    font-size: ${pxToRem(28)};
    line-height: 24px;
  }

  @media (max-width: 559px) {
    font-size: ${pxToRem(24)};
    line-height: 20px;
  }
`

const Thin = styled.span`
  font-weight: 300;
`
