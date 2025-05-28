import classNames from 'classnames'
import { FC, useCallback, useState } from 'react'
import BurgerMenu from '../../assets/common/burger-menu.svg?react'
import { Socials } from '../socials.component.tsx'
import { Backdrop, HeaderMenu, NavigationBar, NavItem, NavList, OpenNavigationWrapper } from './header.styles.ts'

export const NavigationMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])
  return (
    <>
      <HeaderMenu onClick={toggleMenu}>
        <BurgerMenu />
      </HeaderMenu>
      <OpenNavigationWrapper className={classNames({ open: isOpen })}>
        <Backdrop onClick={toggleMenu} />
        <NavigationBar>
          <NavList>
            <NavItem onClick={toggleMenu} to={'/'}>
              MAIN PAGE
            </NavItem>
            <NavItem onClick={toggleMenu} to={'/profile'}>
              PROFILE
            </NavItem>
            <NavItem onClick={toggleMenu} to={'/nft'}>
              NFT
            </NavItem>
          </NavList>
          <Socials />
        </NavigationBar>
      </OpenNavigationWrapper>
    </>
  )
}
