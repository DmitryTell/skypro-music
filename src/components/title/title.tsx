import { FC } from 'react';

import { useAppSelector } from '@hook/';
import { getStateMenu } from '@redux/';

import * as Styled from './title.styled';


interface ITitle {
  text: string;
}

export const Title: FC<ITitle> = ({ text }) => {
  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.Title $color={ isDarkTheme ? '#fff' : '#000' }>
      { text }
    </Styled.Title>
  );
};
