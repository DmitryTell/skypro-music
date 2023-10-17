import { Controls } from "./Controls";
import { Track } from "./Track";
import { Volume } from "./Volume";
import * as S from "./Bar.styles";

export const Bar = ({ page, player }) => {
    return (
        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress />
                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <Controls page={page} />
                        <Track page={page} player={player} />
                    </S.BarPlayer>
                    <Volume page={page} />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
};
