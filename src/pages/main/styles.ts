import styled from 'styled-components'
import { pxToRem } from '../../utils/font.ts'

export const SectionTitle = styled.div`
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(84)};
  font-weight: bold;
  line-height: 50px;
  letter-spacing: 1.3px;
  margin: 0;
  color: white;
  text-shadow: 0 0 25px currentColor;

  @media (max-width: 1399px) {
    font-size: ${pxToRem(72)};
  }

  @media (max-width: 1199px) {
    font-size: ${pxToRem(64)};
    line-height: 44px;
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(50)};
    line-height: 42px;
  }

  @media (max-width: 499px) {
    font-size: ${pxToRem(32)};
    line-height: 28px;
  }
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ListItem = styled.li`
  position: relative;
  font-family: Archivo, sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 700;
  display: inline-block;
  padding-left: 35px;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e082ff;
  }

  @media (max-width: 1399px) {
    font-size: ${pxToRem(16)};
    &::before {
      top: 7px;
    }
  }

  @media (max-width: 991px) {
    font-size: ${pxToRem(14)};
    padding-left: 29px;
    &::before {
      top: 6px;
    }
  }

  @media (max-width: 767px) {
    font-size: ${pxToRem(12)};
    padding-left: 23px;
    &::before {
      top: 5px;
    }
  }
`

export const PinkSpan = styled.span`
  color: #e658b8;
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`
