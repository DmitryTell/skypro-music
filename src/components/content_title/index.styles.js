import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
`;
const mixinFlexboxHorizontal = css`
    -webkit-box-orient: horizontal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
const mixinFlexboxBetween = css`
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;

export const ContentTitle = styled.div`
    ${mixinFlexbox}
    ${mixinFlexboxHorizontal}
    ${mixinFlexboxBetween}
    margin-bottom: 24px;
`;
export const ContentTitleCol = styled.div`
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`;
export const ContentTitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
