import { FC } from 'react'
import styled from 'styled-components'
import ReferralsImgUrl from '../../assets/large-images/referrals-img.png?url'
import { ListItem, ListWrapper, PinkSpan, SectionTitle } from './styles.ts'

export const Referrals: FC = () => {
  return (
    <ScreenContainer>
      <ReferralsImg src={ReferralsImgUrl} />
      <TextContainer>
        <Title>REFERRALS</Title>
        <ListWrapper>
          <ListItem>
            For registration with your <PinkSpan>referral link</PinkSpan> (in case that referral completed Airdrop
            condition) you will get CS token in size <PinkSpan>XXX</PinkSpan>
          </ListItem>
          <ListItem>
            For registration with <PinkSpan>referral link</PinkSpan> (in case that referral completed Airdrop condition)
            you will get CS tokens in amount <PinkSpan>XXX</PinkSpan>. You will get the reward from those referrals who
            were gained by your referral
          </ListItem>
          <ListItem>
            For each NFT level there will be definite pool which will be divided between all holders in proportions.
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

  @media (max-width: 1199px) {
    grid-gap: 40px;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`

const ReferralsImg = styled.img`
  justify-self: left;
  width: 100%;

  @media (max-width: 1199px) {
    min-width: 170px;
  }

  @media (max-width: 991px) {
    max-width: 500px;
    min-width: unset;
    justify-self: center;
    grid-row: 2 / 3;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  max-width: 535px;

  justify-self: center;

  @media (max-width: 767px) {
    max-width: 420px;
    gap: 20px;
  }
`

const Title = styled(SectionTitle)`
  @media (max-width: 991px) {
    text-align: center;
  }
`
