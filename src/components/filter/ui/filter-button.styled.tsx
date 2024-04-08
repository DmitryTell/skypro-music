import styled from 'styled-components';


interface IFilterButtonProps {
  $color: string;
  $colorHover: string;
}

export const FilterButton = styled.button<IFilterButtonProps>`
    font-size: 16px;
    line-height: 24px;
    border: 1px solid ${(props) => props.$color};
    border-radius: 60px;
    background: transparent;
    padding: 6px 20px;
    color: ${(props) => props.$color};
    transition: all 0.5s;

    &:hover {
        border-color: ${(props) => props.$colorHover};
        color: ${(props) => props.$colorHover};
    }

    &:active {
        border-color: #ad61ff;
        color: #ad61ff;
    }
`;
