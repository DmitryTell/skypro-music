import { useState } from 'react';

import { useAppSelector } from '@hook/';
import { getStateFilters, getStateMenu } from '@redux/';

import { FilterButton } from './ui';
import {
  ModalAuthors,
  ModalGenres,
  ModalReleaseDates,
} from './modals';
import * as Styled from './filter.styled';


export const Filter = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const {
    authors,
    genres,
    authorsFilter,
    genresFilter,
    dateFilter,
  } = useAppSelector(getStateFilters);
  const { isDarkTheme } = useAppSelector(getStateMenu);

  const handleNewFilter = (filterName: string) => {
    if (filter === filterName) {
      setFilter(null);
    } else {
      setFilter(filterName);
    }
  };

  return (
    <Styled.FilterContainer>
      <Styled.FilterTitle $color={ isDarkTheme ? '#fff' : '#000' }>
        Искать по:
      </Styled.FilterTitle>
      <FilterButton text="исполнителю" onClick={ () => handleNewFilter('authors') } />
      <FilterButton text="году выпуска" onClick={ () => handleNewFilter('release-dates') } />
      <FilterButton text="жанру" onClick={ () => handleNewFilter('genres') } />
      { filter === 'authors' && <ModalAuthors authors={ authors } authorsFilter={ authorsFilter } /> }
      { filter === 'genres' && <ModalGenres genres={ genres } genresFilter={ genresFilter } /> }
      { filter === 'release-dates' && <ModalReleaseDates dateFilter={ dateFilter } /> }
      { authorsFilter.length > 0 && <Styled.FilterLengthAuthors>{ authorsFilter.length }</Styled.FilterLengthAuthors> }
      { genresFilter.length > 0 && <Styled.FilterLengthGenres>{ genresFilter.length }</Styled.FilterLengthGenres> }
      { dateFilter && <Styled.FilterLengthYears>1</Styled.FilterLengthYears> }
    </Styled.FilterContainer>
  );
};
