import { FC } from 'react'
import styled from 'styled-components'
import { Airdrop } from './airdrop.component.tsx'
import { NftList } from './nft-list.conponent.tsx'
import { ProfileStats } from './profile-stats.component.tsx'

export const ProfilePage: FC = () => {
  return (
    <ProfileContainer>
      <ProfileStats></ProfileStats>
      <Airdrop></Airdrop>
      <NftList></NftList>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  display: grid;
  grid-template-areas: 'stats airdrop' 'list airdrop';
  grid-template-columns: 1150px 336px;
  grid-template-rows: auto 1fr;
  grid-gap: 100px 56px;
  margin: 32px auto 40px;
  max-width: 1542px;

  @media (max-width: 1919px) {
    grid-template-columns: 992px 336px;
    max-width: 1360px;
    grid-gap: 100px 32px;
  }

  @media (max-width: 1439px) {
    grid-template-areas: 'stats' 'airdrop' 'list';
    grid-template-columns: 100%;
    max-width: 1160px;
    grid-gap: 24px;
  }

  @media (max-width: 1199px) {
    grid-template-columns: 100%;
    max-width: calc(100% - 32px);
    grid-gap: 24px;
  }
`
