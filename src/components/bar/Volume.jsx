import * as P from "../../data/pages";
import * as S from "./Bar.styles";

const VOLUME_PATH = "img/icon/sprite.svg#icon-volume";

export const Volume = ({ page }) => {
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
                    <S.VolumeProgressLine type="range" name="range" />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.Volume>
    );
};
