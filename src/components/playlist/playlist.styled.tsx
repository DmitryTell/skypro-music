import styled from 'styled-components';


const PlaylistTitleCol = styled.div`
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
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

export const PlaylistTitleCol01 = styled(PlaylistTitleCol)`
    width: 447px;
`;

export const PlaylistTitleCol02 = styled(PlaylistTitleCol)`
    width: 321px;
`;

export const PlaylistTitleCol03 = styled(PlaylistTitleCol)`
    width: 245px;
`;

export const PlaylistTitleCol04 = styled(PlaylistTitleCol)`
    width: 60px;
    text-align: end;
`;

export const PlaylistTitleColSvg = styled.div`
    width: 12px;
    height: 12px;
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

export const PlatlistTrackErrorText = styled.li`
    width: 500px;
    font-size: 32px;
    line-height: 48px;
    color: #fff;
`;
