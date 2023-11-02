import * as P from "../../data/pages";
import * as S from "./index.styles";

const VOLUME_PATH = "img/icon/sprite.svg#icon-volume";

export const Volume = ({ page, volume, setVolume }) => {
    return (
        <S.Volume>
            <S.VolumeContent>
                <S.VolumeImg>
                    <S.VolumeSvg alt="volume">
                        <use
                            xlinkHref={
                                page === P.CATEGORY
                                    ? `../${VOLUME_PATH}`
                                    : VOLUME_PATH
                            }
                        />
                    </S.VolumeSvg>
                </S.VolumeImg>
                <S.VolumeProgress>
                    <S.VolumeProgressLine
                        type="range"
                        min={0}
                        max={100}
                        step={0.01}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                    />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.Volume>
    );
};
