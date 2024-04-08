import { ReactComponent as SearchIcon } from '@assets/icon/SearchIcon.svg';
import { useAppDispatch, useAppSelector } from '@hook/';
import { setSearchText, getStateMenu } from '@redux/';

import * as Styled from './search.styled';


export const Search = () => {
  const dispatch = useAppDispatch();

  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.SearchContainer $borderColor={ isDarkTheme ? '#4e4e4e' : '#D9D9D9' }>
      <Styled.SearchSvg $stroke={ isDarkTheme ? '#fff' : '#000' }>
        <SearchIcon />
      </Styled.SearchSvg>
      <Styled.SearchInput
        $color={ isDarkTheme ? '#fff' : '#000' }
        placeholder="Поиск"
        type="text"
        onChange={ (e) => dispatch(setSearchText({ text: e.target.value })) }
      />
    </Styled.SearchContainer>
  );
};
