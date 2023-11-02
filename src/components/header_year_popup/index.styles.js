import styled, { css } from "styled-components";

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
    scrollbar-width: 4px;
    scrollbar-color: #fff #4b4949;

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

export const Year = styled.div`
    ${mixinPopups}
    width: 221px;
    height: 196px;
    position: absolute;
    top: 40px;
    left: 200px;
`;
export const PopupContainer = styled.div`
    ${mixinPopupsContainer}
`;
export const PopupLink = styled.a`
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 20px;
    line-height: 24px;
    ${mixinTransition}

    &:hover {
        color: #b672ff;
        text-decoration-line: underline;
    }
`;
