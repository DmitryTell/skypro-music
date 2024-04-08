import { useAppSelector } from '@hook/';
import { getStateMenu } from '@redux/';

import * as Styled from './sidebar-list-loading.styled';


export const SidebarListLoading = () => {
  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.SidebarLoadingList>
      { ['1', '2', '3'].map((item) => (
        <Styled.SidebarLoadingItem
          key={ item }
          $isDarkTheme={ isDarkTheme }
        />
      )) }
    </Styled.SidebarLoadingList>
  );
};
