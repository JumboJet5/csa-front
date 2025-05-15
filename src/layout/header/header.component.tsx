import { FC } from 'react'
import Logo from '../../assets/logo/logo.svg?react'
import SmallLogo from '../../assets/logo/small-logo.svg?react'
import { ConnectWalletButton } from '../../components/connect-wallet-button.component.tsx'
import { HeaderContainer, HeaderSocials } from './header.styles.ts'
import { NavigationMenu } from './menu.component.tsx'

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderSocials />
      <Logo className={'logo'} />
      <SmallLogo className={'small-logo'} />
      <ConnectWalletButton />
      <NavigationMenu />
    </HeaderContainer>
  )
}
