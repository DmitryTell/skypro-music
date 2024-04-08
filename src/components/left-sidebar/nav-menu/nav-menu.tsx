import { ReactComponent as Light } from '@assets/icon/Light.svg';
import { ReactComponent as Dark } from '@assets/icon/Dark.svg';
import { useAppDispatch, useAppSelector } from '@hook/';
import { setIsDarkTheme, getStateMenu } from '@redux/';

import { menuList } from '../lib';
import * as Styled from './nav-menu.styled';


export const NavMenu = () => {
  const dispatch = useAppDispatch();

  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.MenuContainer>
      <Styled.MenuList>
        { menuList.map((item) => (
          <Styled.MenuItem key={ item.id }>
            <Styled.MenuLink
              $color={ isDarkTheme ? '#fff' : '#000' }
              to={ item.href }
            >
              { item.text }
            </Styled.MenuLink>
          </Styled.MenuItem>
        )) }
        <Styled.MenuItem>
          <Styled.MenuButton
            type="button"
            onClick={ () => dispatch(setIsDarkTheme()) }
          >
            { isDarkTheme ? <Light /> : <Dark /> }
          </Styled.MenuButton>
        </Styled.MenuItem>
      </Styled.MenuList>
    </Styled.MenuContainer>
  );
};
