import { ReactComponent as Prev } from '@assets/icon/Prev.svg';
import { ReactComponent as Play } from '@assets/icon/Play.svg';
import { ReactComponent as Pause } from '@assets/icon/Pause.svg';
import { ReactComponent as Next } from '@assets/icon/Next.svg';
import { ReactComponent as Repeat } from '@assets/icon/Repeat.svg';
import { ReactComponent as Shuffle } from '@assets/icon/Shuffle.svg';
import { ReactComponent as Plug } from '@assets/icon/Plug.svg';
import { ReactComponent as Like } from '@assets/icon/Like.svg';
import { useAppDispatch, useAppSelector } from '@hook/';
import { getNextTrack, getPrevTrack } from '@utils/';
import {
  getStatePlaylist,
  setIsPlaying,
  setIsLoop,
  setIsShuffled,
  getNewTrack,
  useLikeTrackMutation,
  setCurrentLike,
} from '@redux/';

// eslint-disable-next-line import/max-dependencies
import * as Styled from './control-bar.styled';


export const ControlBar = () => {
  const dispatch = useAppDispatch();

  const [likeTrack] = useLikeTrackMutation();

  const {
    currentTrack,
    currentPlaylist,
    shuffledPlaylist,
    isPlaying,
    isLoop,
    isShuffled,
    currentLike,
  } = useAppSelector(getStatePlaylist);

  const handleGetPrevTrack = () => {
    if (isShuffled) {
      dispatch(getNewTrack({ track: getPrevTrack(currentTrack, shuffledPlaylist) }));
    } else {
      dispatch(getNewTrack({ track: getPrevTrack(currentTrack, currentPlaylist) }));
    }
  };

  const handleGetNextTrack = () => {
    if (isShuffled) {
      dispatch(getNewTrack({ track: getNextTrack(currentTrack, shuffledPlaylist) }));
    } else {
      dispatch(getNewTrack({ track: getNextTrack(currentTrack, currentPlaylist) }));
    }
  };

  const handleLikeTrack = () => {
    likeTrack({ id: currentTrack?.id || 0, isLiked: currentLike })
      .unwrap()
      .then(() => {
        dispatch(setCurrentLike({ currentLike: !currentLike }));
      });
  };

  return (
    <Styled.ControlBarContainer>
      <Styled.ControlBarButtons>
        <Styled.ControlBarPrevButton type="button" onClick={ handleGetPrevTrack }>
          <Prev />
        </Styled.ControlBarPrevButton>
        { isPlaying ? (
          <Styled.ControlBarPauseButton type="button" onClick={ () => dispatch(setIsPlaying({ isPlaying: false })) }>
            <Pause />
          </Styled.ControlBarPauseButton>
        ) : (
          <Styled.ControlBarPlayButton type="button" onClick={ () => dispatch(setIsPlaying({ isPlaying: true })) }>
            <Play />
          </Styled.ControlBarPlayButton>
        ) }
        <Styled.ControlBarNextButton type="button" onClick={ handleGetNextTrack }>
          <Next />
        </Styled.ControlBarNextButton>
        <Styled.ControlBarRepeatButton $isLoop={ isLoop } type="button" onClick={ () => dispatch(setIsLoop()) }>
          <Repeat />
        </Styled.ControlBarRepeatButton>
        <Styled.ControlBarShuffleButton $isShuffled={ isShuffled } type="button" onClick={ () => dispatch(setIsShuffled({ isShuffled, currentPlaylist })) }>
          <Shuffle />
        </Styled.ControlBarShuffleButton>
      </Styled.ControlBarButtons>
      <Styled.ControlBarTrackPlay>
        <Styled.ControlBarTrackPlayContain>
          <Styled.ControlBarTrackPlayImg>
            <Plug />
          </Styled.ControlBarTrackPlayImg>
          <Styled.ControlBarTrackPlayAuthor>
            <span>{ currentTrack?.author }</span>
          </Styled.ControlBarTrackPlayAuthor>
          <Styled.ControlBarTrackPlayAlbum>
            <span>{ currentTrack?.album }</span>
          </Styled.ControlBarTrackPlayAlbum>
        </Styled.ControlBarTrackPlayContain>
        <Styled.ControlBarTrackPlayLike>
          <Styled.ControlBarLikeButton
            $isLiked={ currentLike }
            type="button"
            onClick={ handleLikeTrack }
          >
            <Like />
          </Styled.ControlBarLikeButton>
        </Styled.ControlBarTrackPlayLike>
      </Styled.ControlBarTrackPlay>
    </Styled.ControlBarContainer>
  );
};
