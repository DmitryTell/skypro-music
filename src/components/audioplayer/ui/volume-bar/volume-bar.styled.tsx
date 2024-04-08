import styled from 'styled-components';


interface IVolumeBarImgProp {
  $fill: string;
}

interface IVolumeBarProgressProps {
  $color: string;
  $bgColor: string;
}

export const VolumeBarContainer = styled.div`
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 92px 0 0;
`;

export const VolumeBarContent = styled.div`
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
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: end;
`;

export const VolumeBarImg = styled.div<IVolumeBarImgProp>`
    width: 13px;
    height: 18px;
    margin-right: 17px;

    & svg mask,
    & svg path {
        fill: ${(props) => props.$fill};
    }
`;

export const VolumeBarProgress = styled.div`
    width: 109px;
    padding-bottom: 5px;
`;

export const VolumeBarProgressLine = styled.input<IVolumeBarProgressProps>`
    --progress-height: 5px;
    --progress-color: ${(props) => props.$color};
    --progress-bg-color: ${(props) => props.$bgColor};

    width: 100%;
    height: var(--progress-height);
    appearance: none;
    cursor: pointer;
    background: transparent;
    position: relative;
    overflow: hidden;

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
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
