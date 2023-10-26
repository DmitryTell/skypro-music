import { useSelector, useDispatch } from "react-redux";
import * as S from "./Content.styles";
import * as P from "../../data/pages";
import { getMinutesFromSeconds } from "../../data/secondary-functions";
import {
    playerCurrentIdSelector,
    playerIsPausedSelector,
} from "../../store/selectors/player";
import { setCurrentId } from "../../store/slices/player";

const NOTE_PATH = "img/icon/sprite.svg#icon-note";
const LIKE_PATH = "img/icon/sprite.svg#icon-like";
const DOTE_PATH = "img/icon/sprite.svg#dote";

export const Item = ({ page, track, isLoading, setPlayer }) => {
    const isPaused = useSelector(playerIsPausedSelector);
    const currentId = useSelector(playerCurrentIdSelector);

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
                            <S.PlaylistTrackLikeSvg alt="like">
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
