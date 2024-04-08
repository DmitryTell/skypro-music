import styled from 'styled-components';
import { Link } from 'react-router-dom';


interface IMenuLinkProp {
  $color: string;
}

export const MenuContainer = styled.div`
    display: block;
    visibility: visible;
`;

export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
`;

export const MenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`;

export const MenuLink = styled(Link)<IMenuLinkProp>`
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.$color};
`;

export const MenuButton = styled.button`
    width: 39px;
    height: 39px;
    background: transparent;
    border: none;
`;
