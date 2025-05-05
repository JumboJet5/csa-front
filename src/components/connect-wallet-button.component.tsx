import { FC } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../utils/font.ts'

export const ConnectWalletButton: FC = () => {
  return <Button>CONNECT WALLET</Button>
}

export const Button = styled.button`
  height: 24px;
  min-width: 110px;
  padding: 4px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, #4ca9ff, #ff4cad);
  font-family: Changa, sans-serif;
  font-size: ${pxToRem(10)};
  font-weight: bold;
  line-height: 1;
  justify-self: end;

  @media (max-width: 991px) {
    margin: auto;
  }
`
