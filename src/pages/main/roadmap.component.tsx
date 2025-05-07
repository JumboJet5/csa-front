import { FC } from 'react'
import styled from 'styled-components'
import RoadmapCheck from '../../assets/common/roadmap-check.svg?react'
import RoadmapImgUrl from '../../assets/large-images/roadmap-img.png?url'
import { pxToRem } from '../../utils/font.ts'
import { ListItem, ListWrapper, PinkSpan, SectionTitle, Separator } from './styles.ts'

export const Roadmap: FC = () => {
  return (
    <ScreenContainer>
      <RoadmapImg src={RoadmapImgUrl} />
      <TextContainer>
        <Title>ROADMAP</Title>
        <InfoContainer>
          <Subsection>
            <Subtitle>
              <span>2022 ACADEMY</span>
              <RoadmapCheck />
            </Subtitle>
            <Separator />
            <ListWrapper>
              <ListItem>
                Development of the <PinkSpan>Arena</PinkSpan> Project
              </ListItem>
              <ListItem>
                Development of <PinkSpan>Arena Training</PinkSpan> Materials
              </ListItem>
              <ListItem>
                <PinkSpan>Trademark</PinkSpan> registration
              </ListItem>
              <ListItem>
                Approval of the <PinkSpan>AI algorithm</PinkSpan> with valve and other partners
              </ListItem>
            </ListWrapper>
          </Subsection>
          <Subsection>
            <Subtitle>
              <span>2023</span>
              <RoadmapCheck />
            </Subtitle>
            <Separator />
            <ListWrapper>
              <ListItem>
                Development of <PinkSpan>Software</PinkSpan> for game time analysis
              </ListItem>
              <ListItem>
                Development of <PinkSpan>NFT Marketplace</PinkSpan>
              </ListItem>
              <ListItem>
                Issue NFT <PinkSpan>1-7</PinkSpan> LVL
              </ListItem>
            </ListWrapper>
          </Subsection>
        </InfoContainer>
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
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`

const RoadmapImg = styled.img`
  justify-self: left;
  width: 100%;

  @media (max-width: 1199px) {
    max-width: 500px;
    justify-self: center;
    grid-row: 2 / 3;
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
  color: #57a3f9;
  font-size: ${pxToRem(42)};
  display: flex;
  align-items: center;
  height: 50px;

  svg {
    transform: translateX(-15px);
  }

  @media (max-width: 1399px) {
    font-size: ${pxToRem(40)};
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(36)};
    line-height: 44px;
    height: 42px;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(28)};
    line-height: 24px;
    height: 24px;

    svg {
      max-width: 64px;
      transform: translateX(-11px);
    }
  }

  @media (max-width: 499px) {
    font-size: ${pxToRem(24)};
    line-height: 24px;

    svg {
      max-width: 54px;
      transform: translateX(-9px);
    }
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 767px) {
    gap: 6px;
  }
`
