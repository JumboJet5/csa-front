import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import TokenomicsImgUrl from '../../assets/large-images/tokenomics-img.png?url'
import { pxToRem } from '../../utils/font.ts'
import { Bold, ListItem, ListWrapper, SectionTitle } from './styles.ts'

export const Tokenomics: FC = () => {
  return (
    <ScreenContainer>
      <ChartWrapper>
        <TokenomicsImg src={TokenomicsImgUrl} />
        <TotalsWrapper>
          <Title>TOKENOMICS</Title>
          <Subtitle>OF CST TOKEN</Subtitle>
          <ListWrapper>
            <ListItem>Total offer: 10,000,000,000 CST</ListItem>
            <ListItem>Initial offer: 1,000,000,000 CST</ListItem>
            <ListItem>Distribution of tokens</ListItem>
          </ListWrapper>
        </TotalsWrapper>
      </ChartWrapper>
      <TokenPartsDescriptionWrapper>
        <TokenPartDescriptionItem className={'pink'}>
          <PartPercents>47</PartPercents>
          <PartDescription className={'small'}>
            <Bold>
              Community Access Program & App Testers - <AmountSpan>4,700,000,000</AmountSpan> CST.
            </Bold>{' '}
            Tokens designed to reward the community and testers and airdrop
          </PartDescription>
        </TokenPartDescriptionItem>
        <TokenPartDescriptionItem className={'blue'}>
          <PartPercents>18</PartPercents>
          <PartDescription>
            <Bold>
              "Early Contributors" - <AmountSpan>1,800,000,000</AmountSpan> CST.
            </Bold>{' '}
            Tokens allocated to early platform participants (linear monthly lead for 96 months from TGE).
          </PartDescription>
        </TokenPartDescriptionItem>
        <TokenPartDescriptionItem className={'purple'}>
          <PartPercents>17</PartPercents>
          <PartDescription className={'medium'}>
            <Bold>
              "Investors" - <AmountSpan>1,700,000,000</AmountSpan> CST.
            </Bold>{' '}
            Investor tokens (6-12 month Cliff, then linear monthly lead for 25 months from TGE).
          </PartDescription>
        </TokenPartDescriptionItem>
        <TokenPartDescriptionItem className={'yellow'}>
          <PartPercents>10</PartPercents>
          <PartDescription className={'large'}>
            <Bold>
              “Esports academy” - <AmountSpan>1,000,000,000</AmountSpan> CST.
            </Bold>{' '}
            Tokens owned by the esports academy and used for the needs of the academy (linear monthly lead for 96 months
            from the moment of TGE).
          </PartDescription>
        </TokenPartDescriptionItem>
        <TokenPartDescriptionItem className={'orange'}>
          <PartPercents>8</PartPercents>
          <PartDescription>
            <Bold>
              Community Access Program & App Testers - <AmountSpan>800,000,000</AmountSpan> CST.
            </Bold>{' '}
            Tokens designed to reward the community and testers and airdrop
          </PartDescription>
        </TokenPartDescriptionItem>
      </TokenPartsDescriptionWrapper>
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  min-height: calc(100vh - 240px);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-gap: 64px;

  @media (max-width: 1399px) {
    grid-gap: 32px;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
const ChartWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1919px) {
    display: contents;
  }
`
const TotalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1919px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    justify-self: center;
    align-items: center;
  }

  @media (max-width: 991px) {
    grid-column: 1 / 2;
  }
`
const Subtitle = styled(SectionTitle)`
  margin-top: -6px;
  font-size: ${pxToRem(42)};

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

const Title = styled(SectionTitle)``

const TokenomicsImg = styled.img`
  justify-self: left;
  margin-right: -30px;

  @media (max-width: 1399px) {
    width: 100%;
    margin-right: 0;
  }

  @media (max-width: 991px) {
    max-width: 500px;
    margin: auto;
  }
`

const TokenPartsDescriptionWrapper = styled.div`
  max-width: 580px;
  font-family: Archivo, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 35px;

  @media (max-width: 1199px) {
    gap: 16px;
  }
`
const TokenPartDescriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  --part-color: white;

  &.pink {
    --part-color: #e082ff;
  }

  &.blue {
    --part-color: #70baff;
  }

  &.purple {
    --part-color: #b75cff;
  }

  &.yellow {
    --part-color: #ffd056;
  }

  &.orange {
    --part-color: #ffa665;
  }
`
const Percents = styled(SectionTitle)`
  color: var(--part-color, currentColor);
  display: flex;
  gap: 4px;
  flex: 0 0 130px;
  justify-content: flex-end;

  &::before {
    content: '% ';
    text-shadow: none;
    font-size: ${pxToRem(18)};
  }

  @media (max-width: 1399px) {
    flex: 0 0 110px;
  }

  @media (max-width: 1199px) {
    flex: 0 0 102px;
  }

  @media (max-width: 767px) {
    flex: 0 0 86px;
  }

  @media (max-width: 499px) {
    flex: 0 0 66px;
  }
`
const PartPercents: FC<PropsWithChildren> = ({ children }) => <Percents as={'span'}>{children}</Percents>
const PartDescription = styled.div`
  font-size: ${pxToRem(15)};
  line-height: 21px;
  max-width: 392px;

  &.small {
    max-width: 352px;
  }

  &.medium {
    max-width: 364px;
  }

  &.large {
    max-width: unset;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(10)};
    line-height: 12px;
  }
`
const AmountSpan = styled.span`
  color: var(--part-color, currentColor);
`
