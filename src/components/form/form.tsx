import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoAuth } from '@assets/icon/LogoAuth.svg';

import * as Styled from './form.styled';


interface IForm {
  children: ReactNode;
}

export const Form: FC<IForm> = ({ children }) => (
  <Styled.FormModalBlock>
    <Styled.Form>
      <Styled.FormLogo>
        <Link to="/">
          <LogoAuth />
        </Link>
      </Styled.FormLogo>
      { children }
    </Styled.Form>
  </Styled.FormModalBlock>
);
