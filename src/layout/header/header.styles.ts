import { NavLink } from 'react-router'
import styled from 'styled-components'
import { pxToRem } from '../../utils/font.ts'
import { Socials } from '../socials.component.tsx'

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: calc(100% - 192px);
  display: grid;
  grid-template-columns: 265px 1fr 256px;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  gap: 12px;
  padding: 44px 96px;
  height: 32px;
  z-index: 1001;

  .logo,
  .small-logo {
    user-select: none;
    width: -webkit-fill-available;
  }

  .small-logo {
    display: none;
  }

  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 20px 0 8px;
    grid-template-columns: 1fr;
    .logo {
      display: none;
    }

    .small-logo {
      display: block;
    }
  }
`

export const HeaderSocials = styled(Socials)`
  @media (max-width: 991px) {
    display: none;
  }
`

export const HeaderMenu = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 46px;
  right: 42px;
  padding: 4px;

  @media (max-width: 991px) {
    top: 16px;
    right: 20px;
  }
`

export const OpenNavigationWrapper = styled.div`
  position: fixed;
  inset: 0;

  &:not(.open) {
    display: none;
  }
`

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  background-color: #00000080;
`

export const NavigationBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 101;
  padding: 140px 60px 80px;
  background-color: #1e142e;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 499px) {
    width: 100vw;
  }
`

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 -60px;
`

export const NavItem = styled(NavLink)`
  position: relative;
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: ${pxToRem(20)};
  color: white;
  padding: 15px 60px;
  text-decoration: none;

  &.active {
    color: #f554b9;
  }

  &:hover,
  &:focus {
    color: white;
    background: linear-gradient(to right, #4ca9ff, #f555b9 55%, #f555b9 90%);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -10px;
      width: 6px;
      height: 100%;
      background: #4ca9ff;
    }
  }
`
