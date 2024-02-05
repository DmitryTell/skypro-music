import styled from 'styled-components';


export const FilterButton = styled.button`
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #fff;
    border-radius: 60px;
    background: transparent;
    padding: 6px 20px;
    transition: all 0.5s;

    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
    }

    &:active {
        border-color: #ad61ff;
        color: #ad61ff;
    }
`;
