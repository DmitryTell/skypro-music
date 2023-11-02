import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controls } from "./Controls";
import { Track } from "./Track";
import { Volume } from "./Volume";
import * as S from "./Bar.styles";
import {
    toggleIsPaused,
    toggleIsLoop,
    toggleIsShuffled,
    setCurrentTrack,
    getNewId,
} from "../../store/slices/player";
import {
    playerIsPausedSelector,
    playerIsLoopSelector,
    playerNextTrackSelector,
    playerPrevTrackSelector,
    playerTracksIdsSelector,
    playerShuffledTracksIdsSelector,
    playerIsShuffledSelector,
    playerCurrentTrackSelector,
    playerAllTracksSelector,
} from "../../store/selectors/player";

export const Bar = ({ page }) => {
    const audioRef = useRef(null);
    const dispatch = useDispatch();

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(190);
    const [volume, setVolume] = useState(40);

    const tracks = useSelector(playerAllTracksSelector);
    const isPaused = useSelector(playerIsPausedSelector);
    const isLoop = useSelector(playerIsLoopSelector);
    const nextTrack = useSelector(playerNextTrackSelector);
    const prevTrack = useSelector(playerPrevTrackSelector);
    const allIds = useSelector(playerTracksIdsSelector);
    const shuffledIds = useSelector(playerShuffledTracksIdsSelector);
    const isShuffled = useSelector(playerIsShuffledSelector);
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
    const toggleShuffled = () => {
        dispatch(toggleIsShuffled());
    };
    const handleChangeProgress = () => {
        audioRef.current.currentTime = currentTime;
    };
    const handleNextTrack = () => {
        if (nextTrack) {
            dispatch(setCurrentTrack({ id: nextTrack.id, tracks }));
        }
    };
    const handlePrevTrack = () => {
        if (prevTrack) {
            dispatch(setCurrentTrack({ id: prevTrack.id, tracks }));
        }
    };
    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };
    const getNextTrack = () => {
        if (!isLoop && nextTrack) {
            dispatch(setCurrentTrack({ id: nextTrack.id, tracks }));
        }
    };

    useEffect(() => {
        if (!isShuffled) {
            dispatch(getNewId({ ids: allIds, currentId: currentTrack.id }));
        } else {
            dispatch(
                getNewId({ ids: shuffledIds, currentId: currentTrack.id }),
            );
        }
    }, [currentTrack?.id, isShuffled]);
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
            <S.BarContent>
                <S.BarPlayerProgress
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    step={0.01}
                    onChange={(event) => setCurrentTime(event.target.value)}
                    onClick={handleChangeProgress}
                />
                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <Controls
                            page={page}
                            togglePlayPause={togglePlayPause}
                            toggleLoop={toggleLoop}
                            toggleShuffled={toggleShuffled}
                            handleNextTrack={handleNextTrack}
                            handlePrevTrack={handlePrevTrack}
                        />
                        <Track page={page} currentTrack={currentTrack} />
                    </S.BarPlayer>
                    <Volume page={page} volume={volume} setVolume={setVolume} />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
};
