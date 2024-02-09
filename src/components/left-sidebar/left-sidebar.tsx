import { ReactComponent as Logo } from '@assets/icon/Logo.svg';
import { ReactComponent as Burger } from '@assets/icon/Burger.svg';
import { useAppDispatch, useAppSelector } from '@hook/';
import { setIsOpened, getStateMenu } from '@redux/';

import { NavMenu } from './nav-menu';
import * as Styled from './left-sidebar.styled';


export const LeftSidebar = () => {
  const dispatch = useAppDispatch();

  const { isOpened } = useAppSelector(getStateMenu);

  return (
    <Styled.SidebarContainer>
      <Styled.SidebarLogo>
        <Logo />
      </Styled.SidebarLogo>
      <Styled.SidebarBurger type="button" onClick={ () => dispatch(setIsOpened()) }>
        <Burger />
      </Styled.SidebarBurger>
      { isOpened && <NavMenu /> }
    </Styled.SidebarContainer>
  );
};
