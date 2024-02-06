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

export const PlaylistTrack = styled.div`
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

export const PlaylistTrackTitle = styled.div`
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

export const PlaylistTrackTitleImg = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;

export const PlaylistTrackTitleName = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: #fff;
`;

export const PlaylistTrackTitleAuthor = styled.div`
    width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;

export const PlaylistTrackTitleAuthorText = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    text-align: left;
`;

export const PlaylistTrackTitleAlbum = styled.div`
    width: 245px;
`;

export const PlaylistTrackTitleAlbumText = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`;

export const PlaylistTrackTitleTimeLike = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
`;

export const PlaylistTrackTitleLike = styled.div`
    width: 14px;
    height: 12px;
`;

export const PlaylistTrackTitleTime = styled.span`
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;

export const PlatlistTrackErrorText = styled.li`
    width: 500px;
    font-size: 32px;
    line-height: 48px;
    color: #fff;
`;
