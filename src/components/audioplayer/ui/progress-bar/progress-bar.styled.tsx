import styled from 'styled-components';


interface IProgressBarProp {
  $bgColor: string;
}

export const ProgressBar = styled.input<IProgressBarProp>`
    --progress-height: 8px;
    --progress-color: #b672ff;
    --progress-bg-color: ${(props) => props.$bgColor};

    margin: 0;
    width: 100%;
    height: var(--progress-height);
    appearance: none;
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
