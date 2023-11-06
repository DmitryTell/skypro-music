import styled, { css } from "styled-components";

const mixinSearchText = css`
    background-color: transparent;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`;
const mixinTransition = css`
    transition: all 0.5s;
`;

export const Search = styled.div`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
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
export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #ffffff;
    fill: transparent;
`;
export const SearchText = styled.input`
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
    flex-grow: 100;
    border: none;
    padding: 13px 10px 14px;
    ${mixinSearchText}

    &::-webkit-input-placeholder {
        ${mixinSearchText}
    }
    &:-ms-input-placeholder {
        ${mixinSearchText}
    }
    &::-ms-input-placeholder {
        ${mixinSearchText}
    }
    &::placeholder {
        ${mixinSearchText}
    }
`;
export const Title = styled.h2`
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;
export const Filter = styled.div`
    position: relative;
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
    margin-bottom: 51px;
`;
export const FilterTitle = styled.h3`
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;
export const FilterButton = styled.div`
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    cursor: pointer;
    ${mixinTransition}

    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
    }
    &:active {
        border-color: #ad61ff;
        color: #ad61ff;
    }
    &:not(:last-child) {
        margin-right: 10px;
    }
`;
