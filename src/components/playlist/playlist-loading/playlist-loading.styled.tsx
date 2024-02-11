import styled, { css } from 'styled-components';


const skeletonAnimation = css`
    -webkit-animation: skeleton-animation 2s linear infinite alternate both;
    animation: skeleton-animation 2s linear infinite alternate both;
`;

export const PlaylistLoadingList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 12px;
`;

export const PlaylistLoadingItem = styled.li`
    width: 100%;
`;

export const PlaylistLoadingTrack = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

export const PlaylistLoadingTrackTitle = styled.div`
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
    gap: 17px;
    width: 447px;
`;

export const PlaylistLoadingTrackTitleImg = styled.div`
    width: 51px;
    height: 51px;
    ${skeletonAnimation}
`;

export const PlaylistLoadingTrackTitleName = styled.div`
    width: 356px;
    height: 19px;
    ${skeletonAnimation}
`;

export const PlaylistLoadingTrackTitleAuthor = styled.div`
    width: 271px;
    height: 19px;
    ${skeletonAnimation}
`;

export const PlaylistLoadingTrackTitleAlbum = styled.div`
    width: 305px;
    height: 19px;
    ${skeletonAnimation}
`;
