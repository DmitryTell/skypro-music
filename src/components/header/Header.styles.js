import styled, { css } from "styled-components";

const mixinSearchText = css`
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`;
const mixinPopups = css`
    width: 248px;
    height: 305px;
    padding: 34px;
    border-radius: 12px;
    background: #313131;
`;
const mixinPopupsContainer = css`
    width: 180px;
    height: 237px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track {
        background: #4b4949;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 10px;
    }
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
    font-style: normal;
    font-weight: 400;
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
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;
export const FilterButton = styled.div`
    font-style: normal;
    font-weight: 400;
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
`;
export const Author = styled.div`
    ${mixinPopups}
    position: absolute;
    top: 40px;
    left: 35px;
`;
export const Year = styled.div`
    ${mixinPopups}
    width: 221px;
    height: 196px;
    position: absolute;
    top: 40px;
    left: 170px;
`;
export const Genre = styled.div`
    ${mixinPopups}
    position: absolute;
    top: 40px;
    left: 290px;
`;
export const PopupContainer = styled.div`
    ${mixinPopupsContainer}
`;
export const PopupLink = styled.a`
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    ${mixinTransition}

    &:hover {
        color: #b672ff;
        text-decoration-line: underline;
    }
`;
