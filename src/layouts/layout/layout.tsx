import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
  LeftSidebar, Search, RightSidebar, Audioplayer
} from '@components/';
import { useAppSelector } from '@hook/';
import { getStatePlaylist, getStateMenu } from '@redux/';

import * as Styled from './layout.styled';


export const Layout = () => {
  const { pathname } = useLocation();

  const { currentTrack } = useAppSelector(getStatePlaylist);
  const { isDarkTheme } = useAppSelector(getStateMenu);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Styled.LayoutWrapper>
      <Styled.LayoutContainer $background={ isDarkTheme ? '#181818' : '#fff' }>
        <Styled.LayoutMain>
          <LeftSidebar />
          <Styled.LayoutCenterblock>
            <Search />
            <Outlet context={{ setIsLoading }} />
          </Styled.LayoutCenterblock>
          <RightSidebar isLoading={ isLoading } location={ pathname } />
        </Styled.LayoutMain>
        { currentTrack && <Audioplayer /> }
      </Styled.LayoutContainer>
    </Styled.LayoutWrapper>
  );
};
