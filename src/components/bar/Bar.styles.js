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
    stroke: #696969;
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
    stroke: #696969;
`;
export const Track = styled.div`
    ${mixinFlexbox}
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
`;
export const TrackContain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
export const TrackImg = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    ${mixinFlexbox}
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-area: image;
`;
export const TrackSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;
export const TrackAuthor = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
`;
export const TrackAuthorSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
`;
export const TrackAlbum = styled.div`
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
`;
export const TrackAlbumSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
`;
export const TrackLikeDis = styled.div`
    ${mixinFlexbox}
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 26%;
`;
export const TrackLike = styled.div`
    padding: 5px;
`;
export const TrackLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
export const TrackDislike = styled.div`
    margin-left: 28.5px;
`;
export const TrackDislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`;
export const Volume = styled.div`
    width: auto;
    ${mixinFlexbox}
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 92px 0 0;
`;
export const VolumeContent = styled.div`
    ${mixinFlexbox}
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
export const VolumeImg = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`;
export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`;
export const VolumeProgress = styled.div`
    width: 109px;
`;
export const VolumeProgressLine = styled.input`
    width: 109px;
    cursor: pointer;
`;
