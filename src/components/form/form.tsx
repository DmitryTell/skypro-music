import { FC, ReactNode } from 'react';

import { ReactComponent as LogoAuth } from '@assets/icon/LogoAuth.svg';

import * as Styled from './form.styled';


interface IForm {
  children: ReactNode;
}

export const Form: FC<IForm> = ({ children }) => (
  <Styled.FormModalBlock>
    <Styled.Form>
      <Styled.FormLogo>
        <LogoAuth />
      </Styled.FormLogo>
      { children }
    </Styled.Form>
  </Styled.FormModalBlock>
);
