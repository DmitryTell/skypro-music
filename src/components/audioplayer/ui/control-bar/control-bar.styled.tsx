import styled from 'styled-components';


interface IRepeatButton {
  $isLoop: boolean;
}

interface IShuffledButton {
  $isShuffled: boolean;
}

interface ILikedButton {
  $isLiked: boolean;
}

const ControlBarButton = styled.button`
    border: none;
    background: transparent;
    transition: all 0.5s;
`;

export const ControlBarContainer = styled.div`
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
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;

export const ControlBarButtons = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 0 27px 0 31px;
`;

export const ControlBarPrevButton = styled(ControlBarButton)`
    width: 16px;
    height: 14px;

    &:hover svg path {
        stroke: #696969;
        fill: #696969;
    }
`;

export const ControlBarPlayButton = styled(ControlBarButton)`
    width: 22px;
    height: 20px;

    &:hover svg path {
        fill: #696969;
    }
`;

export const ControlBarPauseButton = styled(ControlBarButton)`
    width: 15px;
    height: 19px;

    &:hover svg rect {
        fill: #696969;
    }
`;

export const ControlBarNextButton = styled(ControlBarButton)`
    width: 16px;
    height: 14px;

    &:hover svg path {
        stroke: #696969;
        fill: #696969;
    }
`;

export const ControlBarRepeatButton = styled(ControlBarButton)<IRepeatButton>`
    width: 18px;
    height: 12px;

    & svg path {
        fill: ${(props) => (props.$isLoop ? '#fff' : '#696969')};
    }

    &:hover svg path {
        fill: #acacac;
    }
`;

export const ControlBarShuffleButton = styled(ControlBarButton)<IShuffledButton>`
    width: 19px;
    height: 12px;

    & svg path {
        fill: ${(props) => (props.$isShuffled ? '#fff' : '#696969')};
    }

    &:hover svg path {
        fill: #acacac;
    }
`;

export const ControlBarTrackPlay = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    gap: 25px;
`;

export const ControlBarTrackPlayContain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 0 15px;
`;

export const ControlBarTrackPlayImg = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    grid-area: image;
`;

export const ControlBarTrackPlayAuthor = styled.div`
    grid-row: 1;
    grid-column: 2;
    grid-area: author;
    min-width: 49px;

    & span {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        white-space: nowrap;
    }
`;

export const ControlBarTrackPlayAlbum = styled.div`
    grid-row: 2;
    grid-column: 2;
    grid-area: album;
    min-width: 49px;

    & span {
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: #fff;
    }
`;

export const ControlBarTrackPlayLike = styled.div`
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
    margin-left: 26%;
`;

export const ControlBarLikeButton = styled(ControlBarButton)<ILikedButton>`
    width: 14px;
    height: 12px;

    & svg path {
        fill: ${(props) => (props.$isLiked ? '#B672FF' : 'transparent')};
        stroke: ${(props) => (props.$isLiked ? '#B672FF' : '#696969')};
    }

    &:hover svg path {
        stroke: #acacac;
    }
`;
