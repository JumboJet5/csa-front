import { FC } from 'react'
import styled from 'styled-components'
import EsportsAcademyImgUrl from '../../assets/large-images/esports-academy-img.png?url'
import { pxToRem } from '../../utils/font.ts'
import { ListItem, ListWrapper, PinkSpan, SectionTitle } from './styles.ts'

export const EsportsAcademy: FC = () => {
  return (
    <ScreenContainer>
      <TextContainer>
        <div>
          <Subtitle>PROFESSIONAL</Subtitle>
          <Title>ESPORTS ACADEMY</Title>
        </div>
        <DescriptionWrapper>
          <DescriptionSection1>
            <PinkSpan>Professional eSports Academy</PinkSpan> is a full cycle esports organization that includes:
            Cybersport Academy for Counter-Strike: Global Offensive, DotА2, Valorant, League of Legends, Fortnite, Fifa,
            PUBG.
          </DescriptionSection1>
          <DescriptionSection2>
            Once in the Professional eSports Academy, an esportsman who has potential goes from studying at the academy
            to being signed by the world's best teams, and also receives advertising contracts with world famous brands.
            <Bold>
              In 5 years, we plan to train at least <PinkSpan>50,000</PinkSpan> students worldwide every year
            </Bold>{' '}
            in our own academies and academies of our franchisees.
          </DescriptionSection2>
          <DescriptionSection3>
            <Bold>
              We are the first to unite the <PinkSpan>eSports Arena</PinkSpan> and the <PinkSpan>Academy</PinkSpan> into
              a single entity to develop the infrastructure of the organization.
            </Bold>
            <Conclusion>
              We will divide the gaming area into five parts in order to create a gaming community in our complex,
              namely:
            </Conclusion>
            <Disciplines>
              <ListWrapper>
                <ListItem>Dota2</ListItem>
                <ListItem>CS GO</ListItem>
                <ListItem>Valorant</ListItem>
              </ListWrapper>
              <ListWrapper>
                <ListItem>League of Legends</ListItem>
                <ListItem>Player Unknown’s Battlegrounds (Pubg)</ListItem>
              </ListWrapper>
            </Disciplines>
          </DescriptionSection3>
        </DescriptionWrapper>
      </TextContainer>
      <EsportsAcademyImg src={EsportsAcademyImgUrl} />
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
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`

export const EsportsAcademyImg = styled.img`
  justify-self: left;
  width: 100%;

  @media (max-width: 1199px) {
    max-width: 500px;
    justify-self: center;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  justify-self: center;
`

const Title = styled(SectionTitle)``
const Subtitle = styled(SectionTitle)`
  font-size: ${pxToRem(42)};
  display: flex;
  align-items: center;
  height: 50px;
`

const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-gap: 38px 97px;
  max-width: 812px;

  font-family: Archive, sans-serif;
  font-size: ${pxToRem(18)};

  ${PinkSpan} {
    font-weight: 800;
  }

  @media (max-width: 1399px) {
    font-size: ${pxToRem(16)};
  }

  @media (max-width: 991px) {
    font-size: ${pxToRem(14)};
    grid-gap: 16px 24px;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(12)};
  }

  @media (max-width: 499px) {
    grid-template-columns: 1fr;
  }
`

const Bold = styled.b`
  font-weight: 800;
`

const DescriptionSection1 = styled.div`
  grid-column: 1 / 3;
  max-width: 748px;
  line-height: 1.68;

  @media (max-width: 499px) {
    grid-column: unset;
  }
`

const DescriptionSection2 = styled.div`
  grid-row: 2 / 3;
  line-height: 1.74;

  @media (max-width: 499px) {
    grid-row: unset;
  }
`

const DescriptionSection3 = styled.div`
  grid-row: 2 / 3;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 991px) {
    gap: 8px;
  }

  @media (max-width: 499px) {
    grid-row: unset;
  }
`
const Conclusion = styled.div`
  font-size: ${pxToRem(17)};

  @media (max-width: 1399px) {
    font-size: ${pxToRem(15)};
  }

  @media (max-width: 991px) {
    font-size: ${pxToRem(13)};
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(11)};
  }
`
const Disciplines = styled.div`
  display: flex;
  gap: 16px;

  ${ListItem} {
    padding-left: 27px;
    line-height: 1.3;
  }

  @media (max-width: 499px) {
    justify-content: space-between;
  }
`
