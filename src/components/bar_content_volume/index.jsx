import { useSelector, useDispatch } from "react-redux";
import * as P from "../../data/pages";
import * as S from "./index.styles";
import { playerVolumeSelector } from "../../store/selectors/player";
import { setVolume } from "../../store/slices/player";

const VOLUME_PATH = "img/icon/sprite.svg#icon-volume";

export const Volume = ({ page }) => {
    const dispatch = useDispatch();

    const volume = useSelector(playerVolumeSelector);

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
                        onChange={(e) =>
                            dispatch(setVolume({ value: e.target.value }))
                        }
                    />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.Volume>
    );
};
