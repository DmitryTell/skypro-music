import { Controls } from "./Controls";
import * as S from "./Bar.styles";

export const Bar = ({ player }) => {
    return (
        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress />
                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <Controls />

                        <div className="player__track-play track-play">
                            <div className="track-play__contain">
                                <div className="track-play__image">
                                    <svg
                                        className="track-play__svg"
                                        alt="music"
                                    >
                                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className="track-play__author">
                                    <a
                                        className="track-play__author-link"
                                        href="http://"
                                    >
                                        {player?.title}
                                    </a>
                                </div>
                                <div className="track-play__album">
                                    <a
                                        className="track-play__album-link"
                                        href="http://"
                                    >
                                        {player?.author}
                                    </a>
                                </div>
                            </div>

                            <div className="track-play__like-dis">
                                <div className="track-play__like _btn-icon">
                                    <svg
                                        className="track-play__like-svg"
                                        alt="like"
                                    >
                                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                                    </svg>
                                </div>
                                <div className="track-play__dislike _btn-icon">
                                    <svg
                                        className="track-play__dislike-svg"
                                        alt="dislike"
                                    >
                                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </S.BarPlayer>
                    <div className="bar__volume-block volume">
                        <div className="volume__content">
                            <div className="volume__image">
                                <svg className="volume__svg" alt="volume">
                                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                                </svg>
                            </div>
                            <div className="volume__progress _btn">
                                <input
                                    className="volume__progress-line _btn"
                                    type="range"
                                    name="range"
                                />
                            </div>
                        </div>
                    </div>
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
};
