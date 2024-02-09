import * as Styled from './sidebar-list-loading.styled';


export const SidebarListLoading = () => (
  <Styled.SidebarLoadingList>
    { ['1', '2', '3'].map((item) => (
      <Styled.SidebarLoadingItem key={ item } />
    )) }
  </Styled.SidebarLoadingList>
);
