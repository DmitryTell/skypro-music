import { FC, ReactNode } from 'react';

import * as Styled from './layout-auth.styled';


interface ILayoutAuth {
  children: ReactNode;
}

export const LayoutAuth: FC<ILayoutAuth> = ({ children }) => (
  <Styled.Wrapper>
    <Styled.Container>
      { children }
    </Styled.Container>
  </Styled.Wrapper>
);
