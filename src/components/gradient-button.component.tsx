import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { WithClassName } from '../core'
import { pxToRem } from '../utils/font.ts'

export const GradientButton: FC<PropsWithChildren & WithClassName> = ({ children, className }) => {
  return (
    <GradientButtonWrapper className={className}>
      <HorizontalBorder className={'top'} />
      <InnerButton>{children}</InnerButton>
      <HorizontalBorder className={'bottom'} />
    </GradientButtonWrapper>
  )
}

const GradientButtonWrapper = styled.button`
  position: relative;
  background: transparent;
  height: 64px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 32px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 32px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 32px 0 0 32px;
    border: 1px solid #5ca0f7;
    position: absolute;
    border-right: none;
    transition: background 0.3s;
    left: 0;
    top: 0;
  }

  &:after {
    border-radius: 0 32px 32px 0;
    border: 1px solid #ff3cac;
    position: absolute;
    border-left: none;
    left: auto;
    right: 0;
  }
`
const HorizontalBorder = styled.div`
  height: 1px;
  width: calc(100% - 64px);

  &.top {
    background: linear-gradient(
      to right,
      transparent,
      transparent 5px,
      #5ca0f7 5px,
      #5ca0f7 10px,
      transparent 10px,
      transparent 15px,
      #5ca0f7 15px,
      #ff3cac
    );
  }

  &.bottom {
    background: linear-gradient(
      to left,
      transparent,
      transparent 5px,
      #ff3cac 5px,
      #ff3cac 10px,
      transparent 10px,
      transparent 15px,
      #ff3cac 15px,
      #5ca0f7
    );
  }
`

const InnerButton = styled.span`
  position: relative;
  display: inline-block;
  background: linear-gradient(to right, #5ca0f7, #ff3cac);
  height: 44px;
  width: calc(100% - 20px);
  border-radius: 22px;
  margin: 9px;

  font-family: Changa, sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: bold;
  line-height: 44px;

  z-index: 10;

  ${GradientButtonWrapper}:hover & {
    margin: 11px 12px;
    height: 40px;
    width: calc(100% - 26px);
    line-height: 40px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -9px;
    border-radius: 32px;
    background: linear-gradient(to right, #5ca0f7, #ff3cac);
    filter: blur(10px);
    z-index: -1;
  }
`
