import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;
const mixinPlayerButton = css`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

export const PlayerControls = styled.div`
    ${mixinFlexbox}
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 27px 0 31px;
`;
export const PlayerButtonPrev = styled.div`
    ${mixinPlayerButton}
    margin-right: 23px;
    cursor: pointer;
`;
export const PlayerButtonPrevSvg = styled.svg`
    width: 15px;
    height: 14px;
`;
export const PlayerButtonPlay = styled.div`
    margin-right: 23px;
    cursor: pointer;
`;
export const PlayerButtonPlaySvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
`;
export const PlayerButtonPauseSvg = styled.svg`
    width: 15px;
    height: 19px;
    fill: #d9d9d9;
`;
export const PlayerButtonNext = styled.div`
    margin-right: 28px;
    fill: #a53939;
    cursor: pointer;
`;
export const PlayerButtonNextSvg = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
`;
export const PlayerButtonRepeat = styled.div`
    margin-right: 24px;
`;
export const PlayerButtonRepeatSvg = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: ${({ stroke }) => stroke};
`;
export const PlayerButtonShuffle = styled.div`
    ${mixinFlexbox}
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
export const PlayerButtonShuffleSvg = styled.svg`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: ${({ stroke }) => stroke};
`;
