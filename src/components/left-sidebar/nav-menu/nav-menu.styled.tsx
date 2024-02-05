import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

export const MenuLink = styled(Link)`
    color: #fff;
    font-size: 16px;
    line-height: 24px;
`;
