import styled, { css } from 'styled-components';


interface IDoteAnimation {
  $isPlaying: boolean;
}

interface ILikedButton {
  $isLiked: boolean;
}

const trackDoteAnimation = css`
    -webkit-animation: track-dote-animation 0.5s ease-in-out infinite both;
    animation: track-dote-animation 0.5s ease-in-out infinite both;
`;

export const Track = styled.div`
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

export const TrackTitle = styled.div`
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

export const TrackTitleImg = styled.div`
    width: 51px;
    height: 51px;
    background: #313131;
`;

export const TrackTitleImgDote = styled.div<IDoteAnimation>`
    width: 51px;
    height: 51px;
    background: #313131;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        ${(props) => (props.$isPlaying && trackDoteAnimation)}
    }
`;

export const TrackTitleName = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: #fff;
`;

export const TrackTitleAuthor = styled.div`
    width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;

export const TrackTitleAuthorText = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    text-align: left;
`;

export const TrackTitleAlbum = styled.div`
    width: 245px;
`;

export const TrackTitleAlbumText = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`;

export const TrackTitleTimeLike = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
`;

export const TrackTitleLike = styled.button<ILikedButton>`
    width: 14px;
    height: 12px;
    background: transparent;
    border: none;

    & svg path {
        fill: ${(props) => (props.$isLiked ? '#B672FF' : 'transparent')};
        stroke: ${(props) => (props.$isLiked ? '#B672FF' : '#696969')};
    }

    &:hover svg path {
        stroke: #acacac;
    }
`;

export const TrackTitleTime = styled.span`
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;
