import { Controls } from "./Controls";
import { Track } from "./Track";
import { Volume } from "./Volume";
import * as S from "./Bar.styles";

export const Bar = ({
    page,
    player,
    currentTime,
    setCurrentTime,
    duration,
    volume,
    setVolume,
    controls,
}) => {
    const {
        togglePlayPause,
        toggleLoop,
        toggleShuffled,
        handleChangeProgress,
        handleNextTrack,
    } = controls;

    return (
        <S.Bar>
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
                        />
                        <Track page={page} player={player} />
                    </S.BarPlayer>
                    <Volume page={page} volume={volume} setVolume={setVolume} />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
};
