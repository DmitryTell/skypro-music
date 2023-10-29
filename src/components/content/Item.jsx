import { useState, useEffect } from "react";
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
    const isPaused = useSelector(playlistIsPausedSelector);
    const currentId = useSelector(playlistCurrentIdSelector);

    const [likeTrack, { error }] = useLikeTrackMutation();
    const { clearUser } = useUserContext();

    const [isLiked, setIsLiked] = useState(false);

    const dispatch = useDispatch();

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
        if (!error) {
            likeTrack({ id: track.id, isLiked });
        } else {
            alert(error);
            clearUser();
        }
    };

    useEffect(() => {
        staredUser?.forEach(({ id }) => {
            if (id === userId) {
                setIsLiked(true);
            }
        });
    }, [staredUser]);

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
