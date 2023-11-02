import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./index.styles";
import {
    toggleIsPaused,
    toggleIsLoop,
    setCurrentTrack,
} from "../../store/slices/player";
import {
    playerIsPausedSelector,
    playerIsLoopSelector,
    playerNextIdSelector,
    playerCurrentTrackSelector,
    playerAllTracksSelector,
} from "../../store/selectors/player";
import { Player } from "../bar_player";

export const Bar = ({ page }) => {
    const audioRef = useRef(null);
    const dispatch = useDispatch();

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(190);
    const [volume, setVolume] = useState(40);

    const tracks = useSelector(playerAllTracksSelector);
    const isPaused = useSelector(playerIsPausedSelector);
    const isLoop = useSelector(playerIsLoopSelector);
    const nextId = useSelector(playerNextIdSelector);
    const currentTrack = useSelector(playerCurrentTrackSelector);

    const togglePlayPause = () => {
        if (isPaused) {
            audioRef.current.play();

            dispatch(toggleIsPaused({ status: false }));
        } else {
            audioRef.current.pause();

            dispatch(toggleIsPaused({ status: true }));
        }
    };
    const toggleLoop = () => {
        audioRef.current.loop = isLoop;

        dispatch(toggleIsLoop());
    };
    const handleChangeProgress = () => {
        audioRef.current.currentTime = currentTime;
    };
    const updateTime = () => {
        setCurrentTime(audioRef.current?.currentTime);
    };
    const getNextTrack = () => {
        if (!isLoop && nextId) {
            dispatch(setCurrentTrack({ id: nextId, tracks }));
        }
    };

    useEffect(() => {
        const currentDuration = audioRef.current.duration;

        if (currentDuration && !Number.isNaN(currentDuration)) {
            setDuration(currentDuration);
        }
    }, [audioRef.current?.duration]);
    useEffect(() => {
        audioRef.current?.addEventListener("timeupdate", updateTime);
        audioRef.current?.addEventListener("ended", getNextTrack);

        return () =>
            audioRef.current?.removeEventListener("timeupdate", updateTime);
    });
    useEffect(() => {
        if (currentTrack) {
            audioRef.current.src = currentTrack.track_file;

            dispatch(toggleIsPaused({ status: false }));
        }
    }, [currentTrack]);
    useEffect(() => {
        audioRef.current.volume = volume / 100;
    }, [volume]);

    return (
        <S.Bar>
            <audio autoPlay ref={audioRef}>
                <source src={currentTrack?.track_file} type="audio/mpeg" />
            </audio>
            <Player
                page={page}
                duration={duration}
                volume={volume}
                setVolume={setVolume}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
                togglePlayPause={togglePlayPause}
                toggleLoop={toggleLoop}
                handleChangeProgress={handleChangeProgress}
            />
        </S.Bar>
    );
};
