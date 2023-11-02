import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    playerCurrentTrackSelector,
    playerIsPausedSelector,
    playerAllTracksSelector,
    playerIsLoopSelector,
    playerNextIdSelector,
    playerVolumeSelector,
    playerChangedCurrentTimeSelector,
} from "../../store/selectors/player";
import {
    toggleIsPaused,
    setDuration,
    setCurrentTime,
    setCurrentTrack,
    setNewCurrentTime,
} from "../../store/slices/player";

export const Player = () => {
    const audioRef = useRef(null);
    const dispatch = useDispatch();

    const currentTrack = useSelector(playerCurrentTrackSelector);
    const isPaused = useSelector(playerIsPausedSelector);
    const tracks = useSelector(playerAllTracksSelector);
    const isLoop = useSelector(playerIsLoopSelector);
    const nextId = useSelector(playerNextIdSelector);
    const volume = useSelector(playerVolumeSelector);
    const changedCurrentTime = useSelector(playerChangedCurrentTimeSelector);

    const updateTime = () => {
        dispatch(setCurrentTime({ value: audioRef.current?.currentTime }));
    };
    const getNextTrack = () => {
        if (!isLoop && nextId) {
            dispatch(setCurrentTrack({ id: nextId, tracks }));
        }
    };

    useEffect(() => {
        if (currentTrack) {
            audioRef.current.load();

            dispatch(toggleIsPaused({ status: false }));
        }
    }, [currentTrack]);
    useEffect(() => {
        const currentDuration = audioRef.current.duration;

        if (currentDuration && !Number.isNaN(currentDuration)) {
            dispatch(setDuration({ duration: currentDuration }));
        }
    }, [audioRef.current?.duration]);
    useEffect(() => {
        audioRef.current?.addEventListener("timeupdate", updateTime);
        audioRef.current?.addEventListener("ended", getNextTrack);

        return () =>
            audioRef.current?.removeEventListener("timeupdate", updateTime);
    }, [audioRef.current?.currentTime]);
    useEffect(() => {
        if (isPaused) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    }, [isPaused]);
    useEffect(() => {
        audioRef.current.volume = volume / 100;
    }, [volume]);
    useEffect(() => {
        if (changedCurrentTime) {
            audioRef.current.currentTime = changedCurrentTime;

            dispatch(setNewCurrentTime({ value: null }));
        }
    }, [changedCurrentTime]);

    return (
        <audio autoPlay ref={audioRef}>
            <source src={currentTrack?.track_file} type="audio/mpeg" />
        </audio>
    );
};
