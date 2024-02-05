import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { LeftSidebar, Search, RightSidebar } from '@components/';

import * as Styled from './layout.styled';


export const Layout = () => {
  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Styled.LayoutWrapper>
      <Styled.LayoutContainer>
        <Styled.LayoutMain>
          <LeftSidebar />
          <Styled.LayoutCenterblock>
            <Search />
            <Outlet context={ setIsLoading } />
          </Styled.LayoutCenterblock>
          <RightSidebar isLoading={ isLoading } location={ pathname } />
        </Styled.LayoutMain>
      </Styled.LayoutContainer>
    </Styled.LayoutWrapper>
  );
};
