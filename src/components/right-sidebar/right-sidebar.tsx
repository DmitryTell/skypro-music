import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as Logout } from '@assets/icon/Logout.svg';
import { useAppSelector, useAppDispatch } from '@hook/';
import { getStateUser, removeAuthData, removeUserData } from '@redux/';

import { SidebarListLoading } from './sidebar-list-loading';
import { items } from './lib';
import * as Styled from './right-sidebar.styled';


interface IRightSidebar {
  location: string;
  isLoading: boolean;
}

export const RightSidebar: FC<IRightSidebar> = ({ location, isLoading }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { username } = useAppSelector(getStateUser);

  const handleLogout = () => {
    dispatch(removeAuthData());
    dispatch(removeUserData());
    navigate('/login', { replace: true });
  };

  return (
    <Styled.SidebarContainer>
      <Styled.SidebarPersonal>
        <Styled.SidebarPersonalName>{ username }</Styled.SidebarPersonalName>
        <Styled.SidebarButton type="button" onClick={ handleLogout }>
          <Logout />
        </Styled.SidebarButton>
      </Styled.SidebarPersonal>
      { location === '/' && (
        <Styled.SidebarBlock>
          { isLoading ? (
            <SidebarListLoading />
          ) : (
            <Styled.SidebarList>
              { items.map((item) => (
                <Styled.SidebarItem key={ String(item.id) }>
                  <Link to={ `/category/${item.id}` }>
                    <img alt={ item.alt } src={ `${process.env.PUBLIC_URL}${item.img_path}` } />
                  </Link>
                </Styled.SidebarItem>
              )) }
            </Styled.SidebarList>
          ) }
        </Styled.SidebarBlock>
      ) }
    </Styled.SidebarContainer>
  );
};
