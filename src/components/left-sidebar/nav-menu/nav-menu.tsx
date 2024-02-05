import { menuList } from '../lib';
import * as Styled from './nav-menu.styled';


export const NavMenu = () => (
  <Styled.MenuContainer>
    <Styled.MenuList>
      { menuList.map((item) => (
        <Styled.MenuItem key={ item.id }>
          <Styled.MenuLink to={ item.href }>{ item.text }</Styled.MenuLink>
        </Styled.MenuItem>
      )) }
    </Styled.MenuList>
  </Styled.MenuContainer>
);
