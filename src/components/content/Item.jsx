import * as S from "./Content.styles";
import * as P from "../../data/pages";

const NOTE_PATH = "img/icon/sprite.svg#icon-note";
const LIKE_PATH = "img/icon/sprite.svg#icon-like";

export const Item = ({ page, track, isLoaded }) => {
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
                                <S.PlaylistTrackTitleLink href="http://">
                                    {track.title}
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
                            <S.PlaylistTrackAuthorLink href="/#">
                                {track.author}
                            </S.PlaylistTrackAuthorLink>
                        </S.PlaylistTrackAuthor>
                        <S.PlaylistTrackAlbum>
                            <S.PlaylistTrackAlbumLink href="/#">
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
                                {track.duration}
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
