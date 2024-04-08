import { FC } from 'react';

import { ITrack } from '@interface/';
import { ReactComponent as Clock } from '@assets/icon/Clock.svg';
import { useAppSelector } from '@hook/';
import { getStateMenu } from '@redux/';
import { Button } from '@shared/';

import { PlaylistLoading } from './playlist-loading';
import { Track } from './track';
import * as Styled from './playlist.styled';


interface IPlaylist {
  tracks: ITrack[] | [];
  isLoading: boolean;
  isError: string | null;
}

export const Playlist: FC<IPlaylist> = ({ tracks, isLoading, isError }) => {
  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.PlaylistContainer>
      <Styled.PlaylistTitleContainer>
        <Styled.PlaylistTitleCol01 $color={ isDarkTheme ? '#4E4E4E' : '#B1B1B1' }>
          трек
        </Styled.PlaylistTitleCol01>
        <Styled.PlaylistTitleCol02 $color={ isDarkTheme ? '#4E4E4E' : '#B1B1B1' }>
          исполнитель
        </Styled.PlaylistTitleCol02>
        <Styled.PlaylistTitleCol03 $color={ isDarkTheme ? '#4E4E4E' : '#B1B1B1' }>
          альбом
        </Styled.PlaylistTitleCol03>
        <Styled.PlaylistTitleCol04 $stroke={ isDarkTheme ? '#4E4E4E' : '#B1B1B1' }>
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
            <Styled.PlatlistTrackErrorText $color={ isDarkTheme ? '#fff' : '#000' }>
              { isError ? `Ошибка загрузки: ${isError}` : 'Не удалось загрузить плейлист' }
              <Styled.PlaylistTrackErrorButtonBox>
                <Button text="Перезагрузить" onClick={ () => window.location.reload() } />
              </Styled.PlaylistTrackErrorButtonBox>
            </Styled.PlatlistTrackErrorText>
          ) }
        </Styled.PlaylistList>
      ) }
    </Styled.PlaylistContainer>
  );
};
