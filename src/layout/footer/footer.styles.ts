import styled from 'styled-components'
import SmallLogo from '../../assets/logo/small-logo.svg?react'
import { pxToRem } from '../../utils/font.ts'
import { Socials } from '../socials.component.tsx'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 52px 48px 48px 81px;
  background-color: #06020c;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 44px 30px;
  }
`

export const FooterSocials = styled(Socials)`
  display: none;

  @media (max-width: 991px) {
    display: flex;
  }
`

export const FooterLogo = styled(SmallLogo)`
  display: none;

  @media (max-width: 991px) {
    display: block;
  }
`

export const DocLinkWrapper = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
`

export const DocLink = styled.a`
  font-family: Archivo, sans-serif;
  font-weight: 600;
  font-size: ${pxToRem(14)};
  color: #fff;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:visited {
    color: #fff;
  }
`

export const LinkSeparator = styled.div`
  display: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.4;

  @media (max-width: 991px) {
    display: block;
  }
`

export const Copyright = styled.div`
  font-family: Archivo, sans-serif;
  font-weight: 600;
  font-size: ${pxToRem(14)};
  color: #fff;
  opacity: 0.4;
`
