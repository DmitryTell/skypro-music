import { useSelector, useDispatch } from "react-redux";
import * as S from "./Content.styles";
import * as P from "../../data/pages";
import { getMinutesFromSeconds } from "../../data/secondary-functions";
import {
    playlistCurrentIdSelector,
    playlistIsPausedSelector,
} from "../../store/selectors/playlist";
import { setCurrentId } from "../../store/slices/playlist";
import { useLikeTrackMutation } from "../../services/playlist";
import { refreshToken } from "../../api/user";
import { setToken } from "../../store/slices/token";
import { useUserContext } from "../../context/user";

const NOTE_PATH = "img/icon/sprite.svg#icon-note";
const LIKE_PATH = "img/icon/sprite.svg#icon-like";
const DOTE_PATH = "img/icon/sprite.svg#dote";

export const Item = ({
    page,
    track,
    userId,
    staredUser,
    isLoading,
    setPlayer,
}) => {
    const [likeTrack] = useLikeTrackMutation();

    const isLiked = Boolean(
        staredUser?.find(({ id }) => id === userId) || false,
    );
    const { clearUser } = useUserContext();

    const isPaused = useSelector(playlistIsPausedSelector);
    const currentId = useSelector(playlistCurrentIdSelector);

    const dispatch = useDispatch();

    const processLikeError = () => {
        const tokenRefresh = window.localStorage.getItem("REFRESH");

        refreshToken(tokenRefresh)
            .then((newToken) => {
                alert("Token пользователя успешно обновлен");
                dispatch(
                    setToken({
                        access: newToken.access,
                        refresh: tokenRefresh,
                    }),
                );
            })
            .catch(() => {
                alert("Не удалось обновить token пользователя");
                clearUser();
            });
    };
    const handleClick = (event) => {
        event.preventDefault();

        setPlayer({
            title: track.name,
            author: track.author,
            link: track.track_file,
        });
        dispatch(setCurrentId({ id: track.id }));
    };
    const toggleLike = () => {
        const data = { id: track.id, isLiked };

        likeTrack(data)
            .unwrap()
            .then(() => {})
            .catch((error) => {
                if (error.status === 401) {
                    alert(`Ошибка авторизации: ${error.data.detail}`);

                    processLikeError();
                } else {
                    alert(`Что-то пошло не так: ${error.error}`);
                }
            });
    };

    return (
        <S.PlaylistItem>
            <S.PlaylistTrack>
                <S.PlaylistTrackTitle>
                    {!isLoading ? (
                        <>
                            <S.PlaylistTrackTitleImg>
                                {track.id === currentId ? (
                                    <S.PlaylistTrackDoteSvg
                                        $paused={!isPaused ? "paused" : ""}
                                    >
                                        <use
                                            xlinkHref={
                                                page === P.CATEGORY
                                                    ? `../${DOTE_PATH}`
                                                    : DOTE_PATH
                                            }
                                        />
                                    </S.PlaylistTrackDoteSvg>
                                ) : (
                                    <S.PlaylistTrackTitleSvg>
                                        <use
                                            xlinkHref={
                                                page === P.CATEGORY
                                                    ? `../${NOTE_PATH}`
                                                    : NOTE_PATH
                                            }
                                        />
                                    </S.PlaylistTrackTitleSvg>
                                )}
                            </S.PlaylistTrackTitleImg>
                            <div>
                                <S.PlaylistTrackTitleLink
                                    href="/#"
                                    onClick={handleClick}
                                >
                                    {track.name}
                                </S.PlaylistTrackTitleLink>
                            </div>
                        </>
                    ) : (
                        <>
                            <S.PlaylistSkeletonImg />
                            <S.PlaylistSkeletonTitle />
                        </>
                    )}
                </S.PlaylistTrackTitle>
                {!isLoading ? (
                    <>
                        <S.PlaylistTrackAuthor>
                            <S.PlaylistTrackAuthorLink
                                href="/#"
                                onClick={handleClick}
                            >
                                {track.author}
                            </S.PlaylistTrackAuthorLink>
                        </S.PlaylistTrackAuthor>
                        <S.PlaylistTrackAlbum>
                            <S.PlaylistTrackAlbumLink
                                href="/#"
                                onClick={handleClick}
                            >
                                {track.album}
                            </S.PlaylistTrackAlbumLink>
                        </S.PlaylistTrackAlbum>
                        <div>
                            <S.PlaylistTrackLikeSvg
                                alt="like"
                                fill={isLiked ? "#B672FF" : "transparent"}
                                stroke={isLiked ? "#B672FF" : "#696969"}
                                onClick={toggleLike}
                            >
                                <use
                                    xlinkHref={
                                        page === P.CATEGORY
                                            ? `../${LIKE_PATH}`
                                            : LIKE_PATH
                                    }
                                />
                            </S.PlaylistTrackLikeSvg>
                            <S.PlaylistTrackTime>
                                {getMinutesFromSeconds(
                                    track.duration_in_seconds,
                                )}
                            </S.PlaylistTrackTime>
                        </div>
                    </>
                ) : (
                    <>
                        <S.PlaylistSkeletonAuthor />
                        <S.PlaylistSkeletonAlbum />
                    </>
                )}
            </S.PlaylistTrack>
        </S.PlaylistItem>
    );
};
