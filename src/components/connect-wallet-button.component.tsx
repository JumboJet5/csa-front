import { FC, useCallback } from 'react'
import styled from 'styled-components'
import { useAccount, useChainId, useConnect, useDisconnect } from 'wagmi'
import UserIcon from '../assets/common/user-icon.svg?react'
import { collapseAddress } from '../utils/addres.ts'
import { pxToRem } from '../utils/font.ts'

export const ConnectWalletButton: FC = () => {
  const { isConnected } = useAccount()

  return !isConnected ? <Connect /> : <ConnectedAccount />
}

const Connect: FC = () => {
  const chainId = useChainId()
  const { connectors, connect } = useConnect()

  return <ConnectButton onClick={() => connect({ connector: connectors[0], chainId })}>CONNECT WALLET</ConnectButton>
}

const ConnectedAccount: FC = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  const logout = useCallback(() => disconnect(), [disconnect])
  return (
    <ConnectedInfoWrapper>
      <AddressInfoWrapper>
        <UserIcon className={'user-icon'} />
        <span>{collapseAddress(address)}</span>
      </AddressInfoWrapper>
      <DisconnectButton onClick={logout}>DISCONNECT</DisconnectButton>
    </ConnectedInfoWrapper>
  )
}

export const ConnectButton = styled.button`
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
  cursor: pointer;

  @media (max-width: 991px) {
    margin: auto;
  }
`

export const ConnectedInfoWrapper = styled.div`
  position: relative;
  height: 50px;
  border-radius: 10px;

  &:hover {
    background-color: #0c021b;
  }
`

export const AddressInfoWrapper = styled.div`
  height: 50px;
  box-sizing: border-box;
  padding: 4px 14px 8px;

  display: flex;
  align-items: center;
  gap: 14px;

  font-family: Archivo, sans-serif;
  font-size: ${pxToRem(16)};
  font-weight: 400;

  .user-icon {
    color: #f1dc24;
    width: 30px;
    height: 33px;
  }

  ${ConnectedInfoWrapper}:hover & {
    border: 1px solid #3d3549;
    border-radius: 10px 10px 0 0;
  }
`

const DisconnectButton = styled.button`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #0c021b;
  border: 1px solid #3d3549;
  border-top: none;
  border-radius: 0 0 10px 10px;
  padding: 11px 12px 15px;

  font-family: Changa, sans-serif;
  font-size: ${pxToRem(14)};
  font-weight: 800;
  text-align: center;
  cursor: pointer;

  ${ConnectedInfoWrapper}:hover & {
    display: initial;
  }
`
