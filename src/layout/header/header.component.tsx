import { FC } from 'react'
import { HeaderContainer, HeaderMenu, HeaderSocials } from './header.styles.ts'
import BurgerMenu from '../../assets/common/burger-menu.svg?react'
import Logo from '../../assets/logo/logo.svg?react'
import SmallLogo from '../../assets/logo/small-logo.svg?react'
import { ConnectWalletButton } from '../../components/connect-wallet-button.component.tsx'

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderSocials />
      <Logo className={'logo'} />
      <SmallLogo className={'small-logo'} />
      <ConnectWalletButton />
      <HeaderMenu>
        <BurgerMenu />
      </HeaderMenu>
    </HeaderContainer>
  )
}
