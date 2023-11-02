import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;

export const BarContent = styled.div`
    ${mixinFlexbox}
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;
export const BarPlayerProgress = styled.input`
    --progress-height: 8px;
    --progress-color: #b672ff;
    --progress-bg-color: #2e2e2e;

    margin: 0;
    width: 100%;
    height: var(--progress-height);
    -webkit-appearance: none;
    cursor: pointer;
    background: transparent;
    position: relative;
    overflow: hidden;

    &::-webkit-slider-runnable-track {
        position: relative;
        height: var(--progress-height);
        background: var(--progress-bg-color);
    }
    &::-webkit-slider-thumb {
        --thumb-height: 1px;
        --thumb-width: 1px;
        position: relative;
        -webkit-appearance: none;
        width: var(--thumb-width, var(--thumb-height));
        box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
            100vmax var(--progress-color);
    }
    &::-webkit-slider-runnable-track {
        background: var(--progress-bg-color);
    }
    &::-moz-range-track {
        width: 100%;
        height: var(--progress-height);
        background: var(--progress-bg-color);
        border: none;
        border-radius: 0px;
    }
    &::-moz-range-thumb {
        border: none;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background: transparent;
    }
    &::-moz-range-progress {
        background-color: var(--progress-color);
        height: var(--progress-height);
    }
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
