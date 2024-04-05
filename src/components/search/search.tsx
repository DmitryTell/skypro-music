import { ReactComponent as SearchIcon } from '@assets/icon/SearchIcon.svg';
import { useAppDispatch } from '@hook/';
import { setSearchText } from '@redux/';

import * as Styled from './search.styled';


export const Search = () => {
  const dispatch = useAppDispatch();

  return (
    <Styled.SearchContainer>
      <Styled.SearchSvg>
        <SearchIcon />
      </Styled.SearchSvg>
      <Styled.SearchInput placeholder="Поиск" type="text" onChange={ (e) => dispatch(setSearchText({ text: e.target.value })) } />
    </Styled.SearchContainer>
  );
};
