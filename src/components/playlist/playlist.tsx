import { FC } from 'react';

import { ITrack } from '@interface/';
import { transofrmDuration } from '@utils/';
import { ReactComponent as Clock } from '@assets/icon/Clock.svg';
import { ReactComponent as Plug } from '@assets/icon/Plug.svg';
import { ReactComponent as Like } from '@assets/icon/Like.svg';

import { PlaylistLoading } from './playlist-loading';
import * as Styled from './playlist.styled';


interface IPlaylist {
  tracks: ITrack[] | [];
  isLoading: boolean;
}

export const Playlist: FC<IPlaylist> = ({ tracks, isLoading }) => (
  <Styled.PlaylistContainer>
    <Styled.PlaylistTitleContainer>
      <Styled.PlaylistTitleCol01>трек</Styled.PlaylistTitleCol01>
      <Styled.PlaylistTitleCol02>исполнитель</Styled.PlaylistTitleCol02>
      <Styled.PlaylistTitleCol03>альбом</Styled.PlaylistTitleCol03>
      <Styled.PlaylistTitleCol04>
        <Clock />
      </Styled.PlaylistTitleCol04>
    </Styled.PlaylistTitleContainer>
    { isLoading ? (
      <PlaylistLoading />
    ) : (
      <Styled.PlaylistList>
        { tracks?.length ? tracks.map((track) => (
          <Styled.PlaylistItem key={ String(track.id) }>
            <Styled.PlaylistTrack>
              <Styled.PlaylistTrackTitle>
                <Styled.PlaylistTrackTitleImg>
                  <Plug />
                </Styled.PlaylistTrackTitleImg>
                <Styled.PlaylistTrackTitleName>{ track.name }</Styled.PlaylistTrackTitleName>
              </Styled.PlaylistTrackTitle>
              <Styled.PlaylistTrackTitleAuthor>
                <Styled.PlaylistTrackTitleAuthorText>{ track.author }</Styled.PlaylistTrackTitleAuthorText>
              </Styled.PlaylistTrackTitleAuthor>
              <Styled.PlaylistTrackTitleAlbum>
                <Styled.PlaylistTrackTitleAlbumText>{ track.album }</Styled.PlaylistTrackTitleAlbumText>
              </Styled.PlaylistTrackTitleAlbum>
              <Styled.PlaylistTrackTitleTimeLike>
                <Styled.PlaylistTrackTitleLike>
                  <Like />
                </Styled.PlaylistTrackTitleLike>
                <Styled.PlaylistTrackTitleTime>
                  { transofrmDuration(track.duration_in_seconds) }
                </Styled.PlaylistTrackTitleTime>
              </Styled.PlaylistTrackTitleTimeLike>
            </Styled.PlaylistTrack>
          </Styled.PlaylistItem>
        )) : (
          <Styled.PlatlistTrackErrorText>
            Не удалось загрузить плейлист
          </Styled.PlatlistTrackErrorText>
        ) }
      </Styled.PlaylistList>
    ) }
  </Styled.PlaylistContainer>
);
