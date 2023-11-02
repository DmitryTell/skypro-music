import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Controls } from "../bar_player_controls/index";
import { Track } from "../bar_player_track/index";
import { Volume } from "../bar_player_volume/index";
import * as S from "./index.styles";
import {
    playerShuffledTracksSelector,
    playerIsShuffledSelector,
    playerAllTracksSelector,
    playerCurrentTrackSelector,
    playerNextIdSelector,
    playerPrevIdSelector,
} from "../../store/selectors/player";
import {
    getNewId,
    setCurrentTrack,
    toggleIsShuffled,
} from "../../store/slices/player";

export const Player = ({
    page,
    duration,
    volume,
    setVolume,
    currentTime,
    setCurrentTime,
    toggleLoop,
    handleChangeProgress,
    togglePlayPause,
}) => {
    const dispatch = useDispatch();

    const tracks = useSelector(playerAllTracksSelector);
    const currentTrack = useSelector(playerCurrentTrackSelector);
    const shuffledTracks = useSelector(playerShuffledTracksSelector);
    const isShuffled = useSelector(playerIsShuffledSelector);
    const nextId = useSelector(playerNextIdSelector);
    const prevId = useSelector(playerPrevIdSelector);

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
    const toggleShuffled = () => {
        dispatch(toggleIsShuffled());
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

    return (
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
    );
};
