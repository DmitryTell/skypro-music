import { FilterButton } from './ui';
import * as Styled from './filter.styled';


export const Filter = () => (
  <Styled.FilterContainer>
    <Styled.FilterTitle>Искать по:</Styled.FilterTitle>
    <FilterButton text="исполнителю" onClick={ () => console.log('Click author filter') } />
    <FilterButton text="году выпуска" onClick={ () => console.log('Click release date filter') } />
    <FilterButton text="жанру" onClick={ () => console.log('Click genre filter') } />
  </Styled.FilterContainer>
);
