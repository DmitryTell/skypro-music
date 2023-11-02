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
    playerNextIdSelector,
    playerPrevIdSelector,
    playerIsShuffledSelector,
    playerCurrentTrackSelector,
    playerAllTracksSelector,
    playerShuffledTracksSelector,
} from "../../store/selectors/player";

export const Bar = ({ page }) => {
    const audioRef = useRef(null);
    const dispatch = useDispatch();

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(190);
    const [volume, setVolume] = useState(40);

    const tracks = useSelector(playerAllTracksSelector);
    const shuffledTracks = useSelector(playerShuffledTracksSelector);
    const isPaused = useSelector(playerIsPausedSelector);
    const isLoop = useSelector(playerIsLoopSelector);
    const nextId = useSelector(playerNextIdSelector);
    const prevId = useSelector(playerPrevIdSelector);
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
        if (nextId) {
            dispatch(setCurrentTrack({ id: nextId, tracks }));
        }
    };
    const handlePrevTrack = () => {
        if (prevId) {
            dispatch(setCurrentTrack({ id: prevId, tracks }));
        }
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
        if (!isShuffled) {
            dispatch(
                getNewId({
                    ids: [...tracks.map(({ id }) => id)],
                    currentId: currentTrack.id,
                }),
            );
        } else {
            dispatch(
                getNewId({
                    ids: [...shuffledTracks.map(({ id }) => id)],
                    currentId: currentTrack.id,
                }),
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
