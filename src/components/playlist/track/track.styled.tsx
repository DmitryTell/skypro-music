import styled, { css } from 'styled-components';


interface IDoteAnimation {
  $isPlaying: boolean;
  $background: string;
}

interface ILikedButtonProps {
  $isLiked: boolean;
  $stroke: string;
  $strokeHover: string;
}

interface ITrackTitleImgProps {
  $fill: string;
  $stroke: string;
}

interface ITrackTitleTextProp {
  $color: string;
}

interface ITrackTitleAlbumTimeProp {
  $color: string;
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

export const TrackTitleImg = styled.div<ITrackTitleImgProps>`
    width: 51px;
    height: 51px;
    
    & svg rect {
        fill: ${(props) => props.$fill};
    }

    & svg path,
    & svg ellipse {
        stroke: ${(props) => props.$stroke};
    }
`;

export const TrackTitleImgDote = styled.div<IDoteAnimation>`
    width: 51px;
    height: 51px;
    background: ${(props) => props.$background};
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        ${(props) => (props.$isPlaying && trackDoteAnimation)}
    }
`;

export const TrackTitleName = styled.span<ITrackTitleTextProp>`
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.$color};
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

export const TrackTitleAuthorText = styled.span<ITrackTitleTextProp>`
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.$color};
    text-align: left;
`;

export const TrackTitleAlbum = styled.div`
    width: 245px;
`;

export const TrackTitleAlbumText = styled.span<ITrackTitleAlbumTimeProp>`
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.$color};
`;

export const TrackTitleTimeLike = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
`;

export const TrackTitleLike = styled.button<ILikedButtonProps>`
    width: 14px;
    height: 12px;
    background: transparent;
    border: none;

    & svg path {
        fill: ${(props) => (props.$isLiked ? '#B672FF' : 'transparent')};
        stroke: ${(props) => (props.$isLiked ? '#B672FF' : props.$stroke)};
    }

    &:hover svg path {
        stroke: ${(props) => props.$strokeHover};
    }
`;

export const TrackTitleTime = styled.span<ITrackTitleAlbumTimeProp>`
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: ${(props) => props.$color};
`;
