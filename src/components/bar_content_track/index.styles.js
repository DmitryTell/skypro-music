import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
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
