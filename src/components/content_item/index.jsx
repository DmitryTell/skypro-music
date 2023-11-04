import { useSelector, useDispatch } from "react-redux";
import * as S from "./index.styles";
import * as P from "../../data/pages";
import { getMinutesFromSeconds } from "../../data/secondary-functions";
import {
    playerAllTracksSelector,
    playerCurrentTrackSelector,
    playerIsPausedSelector,
    playerShuffledPlaylistSelector,
} from "../../store/selectors/player";
import { setCurrentTrack, setNewPlaylist } from "../../store/slices/player";
import { useLikeTrackMutation } from "../../services/playlist";
import { useUserContext } from "../../context/user";

const NOTE_PATH = "img/icon/sprite.svg#icon-note";
const LIKE_PATH = "img/icon/sprite.svg#icon-like";
const DOTE_PATH = "img/icon/sprite.svg#dote";

export const Item = ({ page, track, userId, staredUser, isLoading }) => {
    const [likeTrack] = useLikeTrackMutation();
    const dispatch = useDispatch();
    const { clearUser } = useUserContext();

    const allTracks = useSelector(playerAllTracksSelector);
    const shuffledPlaylist = useSelector(playerShuffledPlaylistSelector);
    const isPaused = useSelector(playerIsPausedSelector);
    const currentTrack = useSelector(playerCurrentTrackSelector);

    const isLiked = Boolean(
        staredUser?.find(({ id }) => id === userId) || false,
    );

    const handleClick = (event) => {
        event.preventDefault();

        dispatch(setCurrentTrack({ id: track.id, tracks: allTracks }));
        dispatch(
            setNewPlaylist({
                tracks: allTracks,
                shuffledTracks: shuffledPlaylist,
            }),
        );
    };
    const toggleLike = () => {
        const data = { id: track.id, isLiked };

        likeTrack(data)
            .unwrap()
            .then(() => {})
            .catch((error) => {
                if (error.status === 401) {
                    alert(`Ошибка авторизации: ${error.data.detail}`);

                    clearUser();
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
                                {track.id === currentTrack?.id ? (
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
