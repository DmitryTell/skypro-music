import { useSelector } from "react-redux";
import * as P from "../../data/pages";
import * as S from "./Bar.styles";
import {
    playerIsShuffledSelector,
    playerIsLoopSelector,
    playerIsPausedSelector,
} from "../../store/selectors/player";

const CONTROL_PATHS = [
    "img/icon/sprite.svg#icon-prev",
    "img/icon/sprite.svg#icon-play",
    "img/icon/sprite.svg#icon-next",
    "img/icon/sprite.svg#icon-repeat",
    "img/icon/sprite.svg#icon-shuffle",
    "img/icon/sprite.svg#icon-pause",
];

export const Controls = ({
    page,
    togglePlayPause,
    toggleLoop,
    toggleShuffled,
    handleNextTrack,
    handlePrevTrack,
}) => {
    const isLoop = useSelector(playerIsLoopSelector);
    const isPaused = useSelector(playerIsPausedSelector);
    const isShuffled = useSelector(playerIsShuffledSelector);

    return (
        <S.PlayerControls>
            <S.PlayerButtonPrev onClick={handlePrevTrack}>
                <S.PlayerButtonPrevSvg alt="prev">
                    <use
                        xlinkHref={
                            page === P.CATEGORY
                                ? `../${CONTROL_PATHS[0]}`
                                : CONTROL_PATHS[0]
                        }
                    />
                </S.PlayerButtonPrevSvg>
            </S.PlayerButtonPrev>
            <S.PlayerButtonPlay className="_btn-icon" onClick={togglePlayPause}>
                {!isPaused ? (
                    <S.PlayerButtonPauseSvg alt="pause">
                        <use
                            xlinkHref={
                                page === P.CATEGORY
                                    ? `../${CONTROL_PATHS[5]}`
                                    : CONTROL_PATHS[5]
                            }
                        />
                    </S.PlayerButtonPauseSvg>
                ) : (
                    <S.PlayerButtonPlaySvg alt="play">
                        <use
                            xlinkHref={
                                page === P.CATEGORY
                                    ? `../${CONTROL_PATHS[1]}`
                                    : CONTROL_PATHS[1]
                            }
                        />
                    </S.PlayerButtonPlaySvg>
                )}
            </S.PlayerButtonPlay>
            <S.PlayerButtonNext onClick={handleNextTrack}>
                <S.PlayerButtonNextSvg alt="next">
                    <use
                        xlinkHref={
                            page === P.CATEGORY
                                ? `../${CONTROL_PATHS[2]}`
                                : CONTROL_PATHS[2]
                        }
                    />
                </S.PlayerButtonNextSvg>
            </S.PlayerButtonNext>
            <S.PlayerButtonRepeat className="_btn-icon" onClick={toggleLoop}>
                <S.PlayerButtonRepeatSvg
                    stroke={isLoop ? "#fff" : "#696969"}
                    alt="repeat"
                >
                    <use
                        xlinkHref={
                            page === P.CATEGORY
                                ? `../${CONTROL_PATHS[3]}`
                                : CONTROL_PATHS[3]
                        }
                    />
                </S.PlayerButtonRepeatSvg>
            </S.PlayerButtonRepeat>
            <S.PlayerButtonShuffle
                className="_btn-icon"
                onClick={toggleShuffled}
            >
                <S.PlayerButtonShuffleSvg
                    stroke={isShuffled ? "#fff" : "#696969"}
                    alt="shuffle"
                >
                    <use
                        xlinkHref={
                            page === P.CATEGORY
                                ? `../${CONTROL_PATHS[4]}`
                                : CONTROL_PATHS[4]
                        }
                    />
                </S.PlayerButtonShuffleSvg>
            </S.PlayerButtonShuffle>
        </S.PlayerControls>
    );
};
