import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@hook/';
import { clickToPlay, getStateUser, getStatePlaylist } from '@redux/';
import { ITrack } from '@interface/';
import { transofrmDuration } from '@utils/';
import { ReactComponent as Clock } from '@assets/icon/Clock.svg';
import { ReactComponent as Plug } from '@assets/icon/Plug.svg';
import { ReactComponent as Like } from '@assets/icon/Like.svg';
import { ReactComponent as Dote } from '@assets/icon/Dote.svg';

import { PlaylistLoading } from './playlist-loading';
// eslint-disable-next-line import/max-dependencies
import * as Styled from './playlist.styled';


interface IPlaylist {
  tracks: ITrack[] | [];
  isLoading: boolean;
  error: string | null;
}

export const Playlist: FC<IPlaylist> = ({ tracks, isLoading, error }) => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(getStateUser);
  const { currentTrack, isPlaying } = useAppSelector(getStatePlaylist);

  const handleClickToTrack = (track: ITrack) => {
    dispatch(clickToPlay({
      track,
      playlist: tracks,
    }));
  };

  return (
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
                <Styled.PlaylistTrackTitle onClick={ () => handleClickToTrack(track) }>
                  { track.id === currentTrack?.id ? (
                    <Styled.PlaylistTrackTitleImgDote $isPlaying={ isPlaying }>
                      <Dote />
                    </Styled.PlaylistTrackTitleImgDote>
                  ) : (
                    <Styled.PlaylistTrackTitleImg>
                      <Plug />
                    </Styled.PlaylistTrackTitleImg>
                  ) }
                  <Styled.PlaylistTrackTitleName>{ track.name }</Styled.PlaylistTrackTitleName>
                </Styled.PlaylistTrackTitle>
                <Styled.PlaylistTrackTitleAuthor onClick={ () => handleClickToTrack(track) }>
                  <Styled.PlaylistTrackTitleAuthorText>{ track.author }</Styled.PlaylistTrackTitleAuthorText>
                </Styled.PlaylistTrackTitleAuthor>
                <Styled.PlaylistTrackTitleAlbum onClick={ () => handleClickToTrack(track) }>
                  <Styled.PlaylistTrackTitleAlbumText>{ track.album }</Styled.PlaylistTrackTitleAlbumText>
                </Styled.PlaylistTrackTitleAlbum>
                <Styled.PlaylistTrackTitleTimeLike>
                  <Styled.PlaylistTrackTitleLike
                    $isLiked={ Boolean(track.stared_user.find((user) => (user.id === userId))) }
                    type="button"
                    onClick={ () => console.log('Click to like') }
                  >
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
              { error ? `Ошибка загрузки: ${error}` : 'Не удалось загрузить плейлист' }
            </Styled.PlatlistTrackErrorText>
          ) }
        </Styled.PlaylistList>
      ) }
    </Styled.PlaylistContainer>
  );
};
