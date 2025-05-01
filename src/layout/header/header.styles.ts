import styled from 'styled-components'
import { Socials } from '../socials.component.tsx'

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 44px 96px;
  justify-content: space-between;
  height: 32px;

  .logo,
  .small-logo {
    user-select: none;
  }

  .small-logo {
    display: none;
  }

  @media (max-width: 991px) {
    height: auto;
    flex-direction: column;
    padding: 20px 0 8px;

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
