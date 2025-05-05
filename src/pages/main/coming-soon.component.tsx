import { FC } from 'react'
import ComingSoonImgUrl from '../../assets/large-images/coming-soon-img.png?url'
import styled from 'styled-components'
import { pxToRem } from '../../utils/font.ts'

export const ComingSoon: FC = () => {
  return (
    <ScreenContainer>
      <ComingSoonImg src={ComingSoonImgUrl} />
      <TextContainer>
        <Title>
          NFT <span className={'small'}>IS</span>
        </Title>
        <ComingSoonDescription>COMING SOON!</ComingSoonDescription>
      </TextContainer>
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  min-height: calc(100vh - 240px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 104px;

  @media (max-width: 991px) {
    grid-template-columns: auto;
    grid-gap: 30px;
  }
`

const ComingSoonImg = styled.img`
  justify-self: right;

  @media (max-width: 1919px) {
    max-width: 500px;
  }

  @media (max-width: 1199px) {
    max-width: 400px;
  }

  @media (max-width: 991px) {
    justify-self: center;
  }
`

const TextContainer = styled.div`
  flex: 1 0 0;

  @media (max-width: 991px) {
    grid-row: 1 / 2;
    justify-self: center;
    max-width: 500px;
    text-align: center;
  }
`

const Title = styled.h2`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(72)};
  font-weight: bold;
  line-height: 50px;
  margin: 0;
  color: white;
  text-shadow: 0 0 25px white;

  .small {
    font-size: ${pxToRem(42)};
  }

  @media (max-width: 1919px) {
    font-size: ${pxToRem(54)};

    .small {
      font-size: ${pxToRem(40)};
    }
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(44)};

    .small {
      font-size: ${pxToRem(32)};
    }
  }
`

const ComingSoonDescription = styled.div`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(140)};
  font-weight: bold;
  line-height: 0.8;
  color: rgb(211 139 3 / 43%);

  @media (max-width: 1919px) {
    font-size: ${pxToRem(120)};
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(100)};
  }
`
