import { useState } from 'react';

import { ReactComponent as Logo } from '@assets/icon/Logo.svg';
import { ReactComponent as Burger } from '@assets/icon/Burger.svg';

import { NavMenu } from './nav-menu';
import * as Styled from './left-sidebar.styled';


export const LeftSidebar = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

  return (
    <Styled.SidebarContainer>
      <Styled.SidebarLogo>
        <Logo />
      </Styled.SidebarLogo>
      <Styled.SidebarBurger type="button" onClick={ () => setIsOpenedMenu(!isOpenedMenu) }>
        <Burger />
      </Styled.SidebarBurger>
      { isOpenedMenu && <NavMenu /> }
    </Styled.SidebarContainer>
  );
};
