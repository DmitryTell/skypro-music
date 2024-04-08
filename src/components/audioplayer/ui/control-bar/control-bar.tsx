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
  getStateMenu,
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
  const { isDarkTheme } = useAppSelector(getStateMenu);

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
        <Styled.ControlBarPrevButton
          $fill={ isDarkTheme ? '#D9D9D9' : '#B1B1B1' }
          $fillHover={ isDarkTheme ? '#696969' : '#707070' }
          $stroke={ isDarkTheme ? '#D9D9D9' : '#B1B1B1' }
          $strokeHover={ isDarkTheme ? '#696969' : '#707070' }
          type="button"
          onClick={ handleGetPrevTrack }
        >
          <Prev />
        </Styled.ControlBarPrevButton>
        { isPlaying ? (
          <Styled.ControlBarPauseButton
            $fill={ isDarkTheme ? '#D9D9D9' : '#B1B1B1' }
            $fillHover={ isDarkTheme ? '#696969' : '#707070' }
            type="button"
            onClick={ () => dispatch(setIsPlaying({ isPlaying: false })) }
          >
            <Pause />
          </Styled.ControlBarPauseButton>
        ) : (
          <Styled.ControlBarPlayButton
            $fill={ isDarkTheme ? '#D9D9D9' : '#B1B1B1' }
            $fillHover={ isDarkTheme ? '#696969' : '#707070' }
            type="button"
            onClick={ () => dispatch(setIsPlaying({ isPlaying: true })) }
          >
            <Play />
          </Styled.ControlBarPlayButton>
        ) }
        <Styled.ControlBarNextButton
          $fill={ isDarkTheme ? '#D9D9D9' : '#B1B1B1' }
          $fillHover={ isDarkTheme ? '#696969' : '#707070' }
          $stroke={ isDarkTheme ? '#D9D9D9' : '#B1B1B1' }
          $strokeHover={ isDarkTheme ? '#696969' : '#707070' }
          type="button"
          onClick={ handleGetNextTrack }
        >
          <Next />
        </Styled.ControlBarNextButton>
        <Styled.ControlBarRepeatButton
          $fill={ isDarkTheme ? '#696969' : '#B1B1B1' }
          $fillActive={ isDarkTheme ? '#fff' : '#000' }
          $fillHover={ isDarkTheme ? '#acacac' : '#707070' }
          $isLoop={ isLoop }
          type="button"
          onClick={ () => dispatch(setIsLoop()) }
        >
          <Repeat />
        </Styled.ControlBarRepeatButton>
        <Styled.ControlBarShuffleButton
          $fill={ isDarkTheme ? '#696969' : '#B1B1B1' }
          $fillActive={ isDarkTheme ? '#fff' : '#000' }
          $fillHover={ isDarkTheme ? '#acacac' : '#707070' }
          $isShuffled={ isShuffled }
          type="button"
          onClick={ () => dispatch(setIsShuffled({ isShuffled, currentPlaylist })) }
        >
          <Shuffle />
        </Styled.ControlBarShuffleButton>
      </Styled.ControlBarButtons>
      <Styled.ControlBarTrackPlay>
        <Styled.ControlBarTrackPlayContain>
          <Styled.ControlBarTrackPlayImg
            $fill={ isDarkTheme ? '#313131' : '#F6F4F4' }
            $stroke={ isDarkTheme ? '#4E4E4E' : '#B1B1B1' }
          >
            <Plug />
          </Styled.ControlBarTrackPlayImg>
          <Styled.ControlBarTrackPlayAuthor $color={ isDarkTheme ? '#fff' : '#000' }>
            <span>{ currentTrack?.author }</span>
          </Styled.ControlBarTrackPlayAuthor>
          <Styled.ControlBarTrackPlayAlbum $color={ isDarkTheme ? '#fff' : '#000' }>
            <span>{ currentTrack?.album }</span>
          </Styled.ControlBarTrackPlayAlbum>
        </Styled.ControlBarTrackPlayContain>
        <Styled.ControlBarTrackPlayLike>
          <Styled.ControlBarLikeButton
            $isLiked={ currentLike }
            $stroke={ isDarkTheme ? '#696969' : '#B1B1B1' }
            $strokeHover={ isDarkTheme ? '#acacac' : '#707070' }
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
