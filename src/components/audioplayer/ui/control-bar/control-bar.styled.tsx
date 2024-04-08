import styled from 'styled-components';


interface IPrevNextButtonProps {
  $fill: string;
  $fillHover: string;
  $stroke: string;
  $strokeHover: string;
}

interface IPlayPauseButtonProps {
  $fill: string;
  $fillHover: string;
}

interface IRepeatButtonProps {
  $isLoop: boolean;
  $fill: string;
  $fillHover: string;
  $fillActive: string;
}

interface IShuffledButtonProps {
  $isShuffled: boolean;
  $fill: string;
  $fillHover: string;
  $fillActive: string;
}

interface ITrackPlayImgProps {
  $fill: string;
  $stroke: string;
}

interface ITrackPlayTextProp {
  $color: string;
}

interface ILikedButtonProp {
  $isLiked: boolean;
  $stroke: string;
  $strokeHover: string;
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

export const ControlBarPrevButton = styled(ControlBarButton)<IPrevNextButtonProps>`
    width: 16px;
    height: 14px;

    & svg path {
        stroke: ${(props) => props.$stroke};
        fill: ${(props) => props.$fill};
    }

    &:hover svg path {
        stroke: ${(props) => props.$strokeHover};
        fill: ${(props) => props.$fillHover};
    }
`;

export const ControlBarPlayButton = styled(ControlBarButton)<IPlayPauseButtonProps>`
    width: 22px;
    height: 20px;

    & svg path {
        fill: ${(props) => props.$fill};
    }

    &:hover svg path {
        fill: ${(props) => props.$fillHover};
    }
`;

export const ControlBarPauseButton = styled(ControlBarButton)<IPlayPauseButtonProps>`
    width: 15px;
    height: 19px;

    & svg rect {
        fill: ${(props) => props.$fill};
    }

    &:hover svg rect {
        fill: ${(props) => props.$fillHover};
    }
`;

export const ControlBarNextButton = styled(ControlBarButton)<IPrevNextButtonProps>`
    width: 16px;
    height: 14px;

    & svg path {
        stroke: ${(props) => props.$stroke};
        fill: ${(props) => props.$fill};
    }

    &:hover svg path {
        stroke: ${(props) => props.$strokeHover};
        fill: ${(props) => props.$fillHover};
    }
`;

export const ControlBarRepeatButton = styled(ControlBarButton)<IRepeatButtonProps>`
    width: 18px;
    height: 12px;

    & svg path {
        fill: ${(props) => (props.$isLoop ? props.$fillActive : props.$fill)};
    }

    &:hover svg path {
        fill: ${(props) => props.$fillHover};
    }
`;

export const ControlBarShuffleButton = styled(ControlBarButton)<IShuffledButtonProps>`
    width: 19px;
    height: 12px;

    & svg path {
        fill: ${(props) => (props.$isShuffled ? props.$fillActive : props.$fill)};
    }

    &:hover svg path {
        fill: ${(props) => props.$fillHover};
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

export const ControlBarTrackPlayImg = styled.div<ITrackPlayImgProps>`
    width: 51px;
    height: 51px;
    grid-area: image;

    & svg rect {
        fill: ${(props) => props.$fill};
    }

    & svg path,
    & svg ellipse {
        stroke: ${(props) => props.$stroke};
    }
`;

export const ControlBarTrackPlayAuthor = styled.div<ITrackPlayTextProp>`
    grid-row: 1;
    grid-column: 2;
    grid-area: author;
    min-width: 49px;

    & span {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${(props) => props.$color};
        white-space: nowrap;
    }
`;

export const ControlBarTrackPlayAlbum = styled.div<ITrackPlayTextProp>`
    grid-row: 2;
    grid-column: 2;
    grid-area: album;
    min-width: 49px;

    & span {
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: ${(props) => props.$color};
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

export const ControlBarLikeButton = styled(ControlBarButton)<ILikedButtonProp>`
    width: 14px;
    height: 12px;

    & svg path {
        fill: ${(props) => (props.$isLiked ? '#B672FF' : 'transparent')};
        stroke: ${(props) => (props.$isLiked ? '#B672FF' : props.$stroke)};
    }

    &:hover svg path {
        stroke: ${(props) => props.$strokeHover};
    }
`;
