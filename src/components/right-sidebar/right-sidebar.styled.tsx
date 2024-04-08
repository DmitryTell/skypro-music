import styled from 'styled-components';


interface ISidebarNameProp {
  $color: string;
}

interface ISidebarButtonProp {
  $background: string;
  $stroke: string;
}

export const SidebarContainer = styled.div`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
`;

export const SidebarPersonal = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 12px 0 15px 0;
`;

export const SidebarPersonalName = styled.p<ISidebarNameProp>`
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.$color};
    margin-right: 16px;
`;

export const SidebarButton = styled.button<ISidebarButtonProp>`
    width: 43px;
    height: 43px;
    background: ${(props) => props.$background};
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg path,
    & svg circle {
        stroke: ${(props) => props.$stroke};
    }
`;

export const SidebarBlock = styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;

export const SidebarList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 30px;
`;

export const SidebarItem = styled.li`
    width: 250px;
    height: 150px;
`;
