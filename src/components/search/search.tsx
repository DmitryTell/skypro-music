import { ReactComponent as SearchIcon } from '@assets/icon/SearchIcon.svg';

import * as Styled from './search.styled';


export const Search = () => (
  <Styled.SearchContainer>
    <Styled.SearchSvg>
      <SearchIcon />
    </Styled.SearchSvg>
    <Styled.SearchInput type="text" onKeyDown={ (e) => console.log(e.currentTarget) } />
  </Styled.SearchContainer>
);
