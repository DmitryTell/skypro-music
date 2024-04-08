import styled from 'styled-components';


interface IPlaylistTitleColProp {
  $color: string;
}

interface IPlaylistTitleSvgProp {
  $stroke: string;
}

interface IPlaylistErrorTextProp {
  $color: string;
}

const PlaylistTitleCol = styled.div`
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const PlaylistContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const PlaylistTitleContainer = styled.div`
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
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const PlaylistTitleCol01 = styled(PlaylistTitleCol)<IPlaylistTitleColProp>`
    width: 447px;
    color: ${(props) => props.$color};
`;

export const PlaylistTitleCol02 = styled(PlaylistTitleCol)<IPlaylistTitleColProp>`
    width: 321px;
    color: ${(props) => props.$color};
`;

export const PlaylistTitleCol03 = styled(PlaylistTitleCol)<IPlaylistTitleColProp>`
    width: 245px;
    color: ${(props) => props.$color};
`;

export const PlaylistTitleCol04 = styled(PlaylistTitleCol)<IPlaylistTitleSvgProp>`
    width: 60px;
    text-align: end;

    & svg path,
    & svg circle {
        stroke: ${(props) => props.$stroke};
    }
`;

export const PlaylistList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100vh;
    gap: 12px;
    padding-bottom: 450px;
    overflow-y: auto;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const PlaylistItem = styled.li`
    width: 100%;
    cursor: pointer;
`;

export const PlatlistTrackErrorText = styled.li<IPlaylistErrorTextProp>`
    width: 100%;
    height: 100vh;
    padding: 50px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 24px;
    font-size: 32px;
    line-height: 48px;
    color: ${(props) => props.$color};
`;

export const PlaylistTrackErrorButtonBox = styled.div`
    width: 278px;
    height: 52px;
`;
