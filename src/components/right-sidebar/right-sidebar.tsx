import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logout } from '@assets/icon/Logout.svg';

import { items } from './lib';
import * as Styled from './right-sidebar.styled';


const mockUserName = 'Vasya.Huev';

interface IRightSidebar {
  location: string;
  isLoading: boolean;
}

export const RightSidebar: FC<IRightSidebar> = ({ location, isLoading }) => (
  <Styled.SidebarContainer>
    <Styled.SidebarPersonal>
      <Styled.SidebarPersonalName>{ mockUserName }</Styled.SidebarPersonalName>
      <Styled.SidebarButton type="button" onClick={ () => console.log('Click logout') }>
        <Logout />
      </Styled.SidebarButton>
    </Styled.SidebarPersonal>
    { location === '/' && (
      <Styled.SidebarBlock>
        <Styled.SidebarList>
          { items.map((item) => (
            <Styled.SidebarItem key={ String(item.id) }>
              <Link to={ `/category/${item.id}` }>
                <img alt={ item.alt } src={ `${process.env.PUBLIC_URL}${item.img_path}` } />
              </Link>
            </Styled.SidebarItem>
          )) }
        </Styled.SidebarList>
      </Styled.SidebarBlock>
    ) }
  </Styled.SidebarContainer>
);
