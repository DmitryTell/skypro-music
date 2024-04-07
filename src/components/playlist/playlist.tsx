import { FC } from 'react';

import { ITrack } from '@interface/';
import { ReactComponent as Clock } from '@assets/icon/Clock.svg';

import { PlaylistLoading } from './playlist-loading';
import { Track } from './track';
import * as Styled from './playlist.styled';


interface IPlaylist {
  tracks: ITrack[] | [];
  isLoading: boolean;
  isError: string | null;
}

export const Playlist: FC<IPlaylist> = ({ tracks, isLoading, isError }) => (
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
            <Track track={ track } tracks={ tracks } />
          </Styled.PlaylistItem>
        )) : (
          <Styled.PlatlistTrackErrorText>
            { isError ? `Ошибка загрузки: ${isError}` : 'Не удалось загрузить плейлист' }
          </Styled.PlatlistTrackErrorText>
        ) }
      </Styled.PlaylistList>
    ) }
  </Styled.PlaylistContainer>
);
