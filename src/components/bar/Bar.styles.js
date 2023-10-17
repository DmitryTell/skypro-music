import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;

export const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`;
export const BarContent = styled.div`
    ${mixinFlexbox}
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;
export const BarPlayerProgress = styled.div`
    width: 100%;
    height: 5px;
    background: #2e2e2e;
`;
export const BarPlayerBlock = styled.div`
    height: 73px;
    ${mixinFlexbox}
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;
export const BarPlayer = styled.div`
    ${mixinFlexbox}
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;
