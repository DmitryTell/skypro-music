import { FC, HTMLProps } from 'react';

import * as Styled from './filter-button.styled';


interface IFilterButton extends HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: React.MouseEventHandler;
}

export const FilterButton: FC<IFilterButton> = ({ text, onClick }) => (
  <Styled.FilterButton type="button" onClick={ onClick }>{ text }</Styled.FilterButton>
);
