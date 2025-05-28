import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { WithClassName } from '../core'
import { pxToRem } from '../utils/font.ts'

export const GradientButton: FC<PropsWithChildren & WithClassName> = ({ children, className }) => {
  return (
    <GradientButtonWrapper className={className}>
      <InnerButton>{children}</InnerButton>
    </GradientButtonWrapper>
  )
}

const GradientButtonWrapper = styled.button`
  position: relative;
  background: transparent;
  height: 64px;
  box-sizing: border-box;

  border-radius: 32px;
  border: 1px white solid;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 32px;
    background: linear-gradient(to right, #5ca0f7, #ff3cac);
    filter: blur(10px);
    z-index: 1;
  }
`

const InnerButton = styled.span`
  position: relative;
  display: inline-block;
  background: linear-gradient(to right, #5ca0f7, #ff3cac);
  height: 44px;
  width: calc(100% - 28px);
  border-radius: 22px;
  margin: 9px 13px;

  font-family: Changa, sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: bold;
  line-height: 44px;

  z-index: 10;
`
