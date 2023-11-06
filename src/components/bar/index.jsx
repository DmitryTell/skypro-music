import { useSelector, useDispatch } from "react-redux";
import { Controls } from "../bar_controls/index";
import { Track } from "../bar_content_track/index";
import { Volume } from "../bar_content_volume/index";
import * as S from "./index.styles";
import {
    playerCurrentTrackSelector,
    playerNextIdSelector,
    playerPrevIdSelector,
    playerIsPausedSelector,
    playerDurationSelector,
    playerCurrentTimeSelector,
    playerPlaylistSelector,
} from "../../store/selectors/player";
import {
    setCurrentTrack,
    toggleIsShuffled,
    toggleIsPaused,
    toggleIsLoop,
    setNewCurrentTime,
    setCurrentTime,
} from "../../store/slices/player";

export const Bar = ({ page }) => {
    const dispatch = useDispatch();

    const playlist = useSelector(playerPlaylistSelector);
    const currentTrack = useSelector(playerCurrentTrackSelector);
    const isPaused = useSelector(playerIsPausedSelector);
    const nextId = useSelector(playerNextIdSelector);
    const prevId = useSelector(playerPrevIdSelector);
    const duration = useSelector(playerDurationSelector);
    const currentTime = useSelector(playerCurrentTimeSelector);

    const togglePlayPause = () => {
        if (isPaused) {
            dispatch(toggleIsPaused({ status: false }));
        } else {
            dispatch(toggleIsPaused({ status: true }));
        }
    };
    const toggleLoop = () => {
        dispatch(toggleIsLoop());
    };
    const handleNextTrack = () => {
        if (nextId) {
            dispatch(setCurrentTrack({ id: nextId, tracks: playlist }));
        }
    };
    const handlePrevTrack = () => {
        if (prevId) {
            dispatch(setCurrentTrack({ id: prevId, tracks: playlist }));
        }
    };
    const toggleShuffled = () => {
        dispatch(toggleIsShuffled());
    };
    const handleChangeProgress = () => {
        dispatch(setNewCurrentTime({ value: currentTime }));
    };

    return (
        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    step={0.01}
                    onChange={(e) =>
                        dispatch(setCurrentTime({ value: e.target.value }))
                    }
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
                    <Volume page={page} />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
};
