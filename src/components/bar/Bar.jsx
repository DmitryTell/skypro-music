import { Controls } from "./Controls";
import { Track } from "./Track";
import { Volume } from "./Volume";
import * as S from "./Bar.styles";

export const Bar = ({ page, player, isLoop, isPlaying, controls }) => {
    return (
        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress />
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
                    <Volume page={page} />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
};
