import { FC, HTMLProps } from 'react';

import { useAppSelector } from '@hook/';
import { getStateMenu } from '@redux/';

import * as Styled from './filter-button.styled';


interface IFilterButton extends HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: React.MouseEventHandler;
}

export const FilterButton: FC<IFilterButton> = ({ text, onClick }) => {
  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.FilterButton
      $color={ isDarkTheme ? '#fff' : '#000' }
      $colorHover={ isDarkTheme ? '#d9b6ff' : '#580EA2' }
      type="button"
      onClick={ onClick }
    >
      { text }
    </Styled.FilterButton>
  );
};
