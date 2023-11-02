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
const mixinLinks = css`
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`;
const skeletonAnimation = css`
    -webkit-animation: skeleton-animation 1s linear infinite alternate both;
    animation: skeleton-animation 1s linear infinite alternate both;
`;
const trackDoteAnimation = css`
    -webkit-animation: track-dote-animation 0.5s ease-in-out infinite both;
    animation: track-dote-animation 0.5s ease-in-out infinite both;
`;

export const PlaylistItem = styled.li`
    width: 100%;
    display: block;
    margin-bottom: 18px;
`;
export const PlaylistTrack = styled.div`
    ${mixinFlexbox}
    ${mixinFlexboxHorizontal}
    ${mixinFlexboxBetween}
`;
export const PlaylistTrackTitle = styled.div`
    ${mixinFlexbox}
    ${mixinFlexboxHorizontal}
    width: 447px;
`;
export const PlaylistTrackTitleImg = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    ${mixinFlexboxHorizontal}
    -webkit-box-align: center;
    justify-content: center;
    margin-right: 17px;
`;
export const PlaylistTrackTitleSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;
export const PlaylistTrackDoteSvg = styled.svg`
    width: 16px;
    height: 16px;
    fill: #b672ff;
    ${({ $paused }) => Boolean($paused) && trackDoteAnimation}
`;
export const PlaylistTrackTitleLink = styled.a`
    ${mixinLinks}
`;
export const PlaylistTrackAuthor = styled.div`
    width: 321px;
    ${mixinFlexbox}
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;
export const PlaylistTrackAuthorLink = styled.a`
    ${mixinLinks}
    text-align: left;
`;
export const PlaylistTrackAlbum = styled.div`
    width: 245px;
`;
export const PlaylistTrackAlbumLink = styled.a`
    ${mixinLinks}
    color: #696969;
`;
export const PlaylistTrackLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: ${({ fill }) => fill};
    stroke: ${({ stroke }) => stroke};
    cursor: pointer;
`;
export const PlaylistTrackTime = styled.span`
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;
export const PlaylistSkeletonImg = styled.div`
    width: 51px;
    height: 51px;
    ${skeletonAnimation}
`;
export const PlaylistSkeletonTitle = styled.div`
    width: 356px;
    height: 19px;
    margin-left: 20px;
    ${skeletonAnimation}
`;
export const PlaylistSkeletonAuthor = styled.div`
    width: 271px;
    height: 19px;
    margin-right: 60px;
    ${skeletonAnimation}
`;
export const PlaylistSkeletonAlbum = styled.div`
    width: 305px;
    height: 19px;
    ${skeletonAnimation}
`;
