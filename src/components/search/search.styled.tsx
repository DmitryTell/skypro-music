import styled from 'styled-components';


interface ISearchContainerProp {
  $borderColor: string;
}

interface ISearchSvgProp {
  $stroke: string;
}

interface IInputProp {
  $color: string;
}

export const SearchContainer = styled.div<ISearchContainerProp>`
    width: 100%;
    border-bottom: 1px solid ${(props) => props.$borderColor};
    margin-bottom: 51px;
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
`;

export const SearchSvg = styled.div<ISearchSvgProp>`
    width: 17px;
    height: 17px;
    margin-right: 5px;

    & svg path,
    & svg circle {
        stroke: ${(props) => props.$stroke};
    }
`;

export const SearchInput = styled.input<IInputProp>`
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
    flex-grow: 100;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.$color};

    &::-webkit-input-placeholder {
        background-color: transparent;
        color: ${(props) => props.$color};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

    &:-ms-input-placeholder {
        background-color: transparent;
        color: ${(props) => props.$color};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

    &::-ms-input-placeholder {
        background-color: transparent;
        color: ${(props) => props.$color};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

    &::placeholder {
        background-color: transparent;
        color: ${(props) => props.$color};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;
