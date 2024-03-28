import { useRef, useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@hook/';
import {
  getStatePlaylist,
  setIsFirstLoading,
  setDuration,
  setCurrentTime,
  setChangedCurrentTime,
} from '@redux/';


export const Audio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const dispatch = useAppDispatch();

  const {
    isFirstLoading,
    currentTrack,
    isPlaying,
    isLoop,
    changedCurrentTime,
    volume,
  } = useAppSelector(getStatePlaylist);

  const updateTime = useCallback(() => {
    const audio = audioRef?.current;

    if (audio?.currentTime) {
      dispatch(setCurrentTime({ currentTime: audio?.currentTime }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (currentTrack) {
      audioRef?.current?.load();

      dispatch(setIsFirstLoading());
    }
  }, [currentTrack, dispatch]);

  useEffect(() => {
    if (isPlaying && !isFirstLoading) {
      audioRef?.current?.play();
    } else {
      audioRef?.current?.pause();
    }
  }, [isFirstLoading, isPlaying]);

  useEffect(() => {
    const currentDuration = audioRef?.current?.duration;

    if (currentDuration && !Number.isNaN(currentDuration)) {
      dispatch(setDuration({ duration: currentDuration }));
    }
  }, [audioRef?.current?.duration, dispatch]);

  useEffect(() => {
    const audio = audioRef?.current;

    audio?.addEventListener('timeupdate', updateTime);

    return () => {
      audio?.removeEventListener('timeupdate', updateTime);
    };
  }, [audioRef?.current?.currentTime, updateTime]);

  useEffect(() => {
    if (changedCurrentTime && audioRef.current) {
      audioRef.current.currentTime = changedCurrentTime;

      dispatch(setChangedCurrentTime({ changedCurrentTime: null }));
    }
  }, [changedCurrentTime, dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLoop;
    }
  }, [isLoop]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <audio ref={ audioRef } autoPlay>
      <source src={ currentTrack?.track_file } type="audio/mpeg" />
    </audio>
  );
};
