import { FC } from 'react';

import * as Styled from './title.styled';


interface ITitle {
  text: string;
}

export const Title: FC<ITitle> = ({ text }) => (
  <Styled.Title>{ text }</Styled.Title>
);
