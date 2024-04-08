import { ReactComponent as Logo } from '@assets/icon/Logo.svg';
import { ReactComponent as LogoLight } from '@assets/icon/LogoLight.svg';
import { ReactComponent as Burger } from '@assets/icon/Burger.svg';
import { useAppDispatch, useAppSelector } from '@hook/';
import { setIsOpened, getStateMenu } from '@redux/';

import { NavMenu } from './nav-menu';
import * as Styled from './left-sidebar.styled';


export const LeftSidebar = () => {
  const dispatch = useAppDispatch();

  const { isOpened, isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.SidebarContainer $background={ isDarkTheme ? 'transparent' : '#F6F5F3' }>
      <Styled.SidebarLogo>
        { isDarkTheme ? <Logo /> : <LogoLight /> }
      </Styled.SidebarLogo>
      <Styled.SidebarBurger
        $stroke={ isDarkTheme ? '#D3D3D3' : '#000' }
        type="button"
        onClick={ () => dispatch(setIsOpened()) }
      >
        <Burger />
      </Styled.SidebarBurger>
      { isOpened && <NavMenu /> }
    </Styled.SidebarContainer>
  );
};
