import { FC, HTMLProps } from 'react';

import * as Styled from './buttons.styled';


interface IButtonReg extends HTMLProps<HTMLButtonElement> {
  onClick: React.MouseEventHandler;
}

export const ButtonReg: FC<IButtonReg> = ({ onClick }) => (
  <Styled.ButtonReg type="button" onClick={ onClick }>Зарегистрироваться</Styled.ButtonReg>
);
