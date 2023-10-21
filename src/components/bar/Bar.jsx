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
    isLoop,
    isPlaying,
    controls,
}) => {
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
                    onClick={controls.handleChangeProgress}
                />
                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <Controls
                            page={page}
                            isLoop={isLoop}
                            isPlaying={isPlaying}
                            controls={controls}
                        />
                        <Track page={page} player={player} />
                    </S.BarPlayer>
                    <Volume page={page} volume={volume} setVolume={setVolume} />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
};
