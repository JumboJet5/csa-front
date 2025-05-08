import { FC } from 'react'
import styled from 'styled-components'
import HowItWorksUrl from '../../assets/large-images/how-it-works-img.png?url'
import { pxToRem } from '../../utils/font.ts'
import { PinkSpan, SectionTitle } from './styles.ts'

export const HowItWorks: FC = () => {
  return (
    <ScreenContainer>
      <TextContainer>
        <Title>HOW IT WORKS</Title>
        <InfoContainer>
          <Description>
            Usually gamers are playing games to achive a new lvl, rank... And the maing thing is that there is{' '}
            <PinkSpan>no possibility</PinkSpan> to make money (If only you are not a professional gamer)
          </Description>
          <DescriptionLabel>
            Thats why we decided <PinkSpan>to change the rules of game</PinkSpan> We want to help young people to
            achieve their goals in Cyber Sport and help them to start making money
          </DescriptionLabel>
          <Description>
            Moreover best of the best will have chance to join professional team and{' '}
            <PinkSpan>start long career</PinkSpan> as professional cybersport gamer
          </Description>
        </InfoContainer>
      </TextContainer>
      <HowItWorksImg src={HowItWorksUrl} />
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  min-height: calc(100vh - 240px);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`

const HowItWorksImg = styled.img`
  justify-self: right;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 500px;
    justify-self: center;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  justify-self: center;
  max-width: 508px;

  @media (max-width: 1199px) {
    max-width: 700px;
    justify-self: center;
  }
`

const Title = styled(SectionTitle)`
  white-space: nowrap;
  padding-left: 32px;
  letter-spacing: 3px;

  @media (max-width: 499px) {
    text-align: center;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const Description = styled.div`
  padding-left: 37px;
  font-family: Achivo, sans-serif;
  font-size: ${pxToRem(15)};
  max-width: 425px;

  @media (max-width: 1199px) {
    max-width: 675px;
    justify-self: center;
  }

  @media (max-width: 499px) {
    font-size: ${pxToRem(12)};
    max-width: unset;
    padding-left: 8px;
  }
`
const DescriptionLabel = styled.div`
  padding: 24px 72px 24px 36px;
  background: linear-gradient(to right, #030a2e, transparent);
  border-radius: 5px;
  font-family: Achivo, sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 700;
  max-width: 425px;

  @media (max-width: 1199px) {
    max-width: 675px;
    justify-self: center;
  }

  @media (max-width: 499px) {
    font-size: ${pxToRem(12)};
    max-width: unset;
    padding: 12px 20px 12px 24px;
    margin: 0 -16px;
  }
`
