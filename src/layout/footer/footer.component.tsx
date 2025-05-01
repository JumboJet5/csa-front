import { FC } from 'react'
import {
  Copyright,
  DocLink,
  DocLinkWrapper,
  FooterContainer,
  FooterLogo,
  FooterSocials,
  LinkSeparator,
} from './footer.styles.ts'

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterLogo />
      <DocLinkWrapper>
        <DocLink href={'#'}>TERMS OF USE</DocLink>
        <LinkSeparator />
        <DocLink href={'#'}>PRIVACY POLICY</DocLink>
      </DocLinkWrapper>
      <FooterSocials />
      <Copyright>© 2023 CYBER SPORT</Copyright>
    </FooterContainer>
  )
}
