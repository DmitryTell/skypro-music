import styled from 'styled-components';


interface ISidebarContainerProp {
  $background: string;
}

interface ISidebarBurgerProp {
  $stroke: string;
}

export const SidebarContainer = styled.nav<ISidebarContainerProp>`
    width: 244px;
    padding: 20px 0 20px 36px;
    background: ${(props) => props.$background};
`;

export const SidebarLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`;

export const SidebarBurger = styled.button<ISidebarBurgerProp>`
    background: transparent;
    border: none;

    & svg path {
      stroke: ${(props) => props.$stroke};
    }
`;
