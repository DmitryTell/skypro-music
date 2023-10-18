import * as S from "./Content.styles";
import * as P from "../../data/pages";
import { getMinutesFromSeconds } from "../../data/secondary-functions";

const NOTE_PATH = "img/icon/sprite.svg#icon-note";
const LIKE_PATH = "img/icon/sprite.svg#icon-like";

export const Item = ({ page, track, isLoaded, setPlayer }) => {
    const handleClick = (event) => {
        event.preventDefault();

        setPlayer({
            title: track.name,
            author: track.author,
        });
    };

    return (
        <S.PlaylistItem>
            <S.PlaylistTrack>
                <S.PlaylistTrackTitle>
                    {isLoaded ? (
                        <>
                            <S.PlaylistTrackTitleImg>
                                <S.PlaylistTrackTitleSvg>
                                    <use
                                        xlinkHref={
                                            page === P.CATEGORY
                                                ? `../${NOTE_PATH}`
                                                : NOTE_PATH
                                        }
                                    />
                                </S.PlaylistTrackTitleSvg>
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
                {isLoaded ? (
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
