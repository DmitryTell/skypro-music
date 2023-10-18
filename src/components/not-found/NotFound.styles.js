import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;

export const NotFoundCenterblock = styled.div`
    padding-top: 100px;
    ${mixinFlexbox}
    justify-content: center;
    align-items: center;
`;
export const NotFoundBlock = styled.div`
    width: 431px;
    height: 366px;
    ${mixinFlexbox}
    flex-direction: column;
    align-items: center;
`;
export const NotFoundTitle = styled.h2`
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings:
        "clig" off,
        "liga" off;
    font-family: StratosSkyeng, sans-serif;
    font-size: 160px;
    font-style: normal;
    font-weight: 400;
    line-height: 168px;
`;
export const NotFoundSubtitle = styled.div`
    margin-bottom: 19px;
    ${mixinFlexbox}
    justify-content: center;
    align-items: center;
`;
export const NotFoundSubtitleText = styled.p`
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`;
export const NotFoundText = styled.p`
    width: 431px;
    margin-bottom: 36px;
    color: #4e4e4e;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
`;
export const NotFoundButton = styled.button`
    width: 278px;
    height: 52px;
    border: none;
    border-radius: 6px;
    background: #580ea2;
    cursor: pointer;
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
    transition: all 0.5s;

    &:hover {
        opacity: 0.5;
    }
`;
