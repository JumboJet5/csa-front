import styled from 'styled-components'
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
  z-index: 1000;

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
