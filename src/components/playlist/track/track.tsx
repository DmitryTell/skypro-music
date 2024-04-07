import { FC, useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hook/';
import {
  clickToPlay,
  getStateUser,
  getStatePlaylist,
  useLikeTrackMutation,
  setCurrentLike,
} from '@redux/';
import { ITrack } from '@interface/';
import { transofrmDuration } from '@utils/';
import { ReactComponent as Plug } from '@assets/icon/Plug.svg';
import { ReactComponent as Like } from '@assets/icon/Like.svg';
import { ReactComponent as Dote } from '@assets/icon/Dote.svg';

import * as Styled from './track.styled';


export const Track: FC<{ track: ITrack; tracks: ITrack[] }> = ({ track, tracks }) => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(getStateUser);
  const { currentTrack, isPlaying } = useAppSelector(getStatePlaylist);

  const [likeTrack] = useLikeTrackMutation();

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleClickToTrack = () => {
    dispatch(clickToPlay({
      track,
      playlist: tracks,
    }));
  };

  const handleLikeTrack = () => {
    likeTrack({ id: track.id, isLiked })
      .unwrap()
      .then(() => {
        setIsLiked(!isLiked);

        dispatch(setCurrentLike({ currentLike: !isLiked }));
      });
  };

  useEffect(() => {
    setIsLiked(Boolean(track.stared_user.find((user) => user.id === userId)));
  }, [track.stared_user, userId]);

  useEffect(() => {
    if (currentTrack) {
      dispatch(setCurrentLike({
        currentLike: Boolean(currentTrack.stared_user.find((user) => user.id === userId)),
      }));
    }
  }, [currentTrack, dispatch, userId]);

  return (
    <Styled.Track>
      <Styled.TrackTitle onClick={ handleClickToTrack }>
        { track.id === currentTrack?.id ? (
          <Styled.TrackTitleImgDote $isPlaying={ isPlaying }>
            <Dote />
          </Styled.TrackTitleImgDote>
        ) : (
          <Styled.TrackTitleImg>
            <Plug />
          </Styled.TrackTitleImg>
        ) }
        <Styled.TrackTitleName>{ track.name }</Styled.TrackTitleName>
      </Styled.TrackTitle>
      <Styled.TrackTitleAuthor onClick={ handleClickToTrack }>
        <Styled.TrackTitleAuthorText>{ track.author }</Styled.TrackTitleAuthorText>
      </Styled.TrackTitleAuthor>
      <Styled.TrackTitleAlbum onClick={ handleClickToTrack }>
        <Styled.TrackTitleAlbumText>{ track.album }</Styled.TrackTitleAlbumText>
      </Styled.TrackTitleAlbum>
      <Styled.TrackTitleTimeLike>
        <Styled.TrackTitleLike
          $isLiked={ isLiked }
          type="button"
          onClick={ handleLikeTrack }
        >
          <Like />
        </Styled.TrackTitleLike>
        <Styled.TrackTitleTime>
          { transofrmDuration(track.duration_in_seconds) }
        </Styled.TrackTitleTime>
      </Styled.TrackTitleTimeLike>
    </Styled.Track>
  );
};
