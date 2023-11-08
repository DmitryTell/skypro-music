import * as P from "../../data/pages";
import * as S from "./index.styles";
import { useUserContext } from "../../context/user";
import { useLikeTrackMutation } from "../../services/playlist";

const TRACK_PATHS = [
    "img/icon/sprite.svg#icon-note",
    "img/icon/sprite.svg#icon-like",
    "img/icon/sprite.svg#icon-dislike",
];

export const Track = ({ page, currentTrack }) => {
    const { clearUser } = useUserContext();
    const [likeTrack] = useLikeTrackMutation();

    const toggleLike = (id, isLiked) => {
        const data = { id, isLiked };

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
        <S.Track>
            <S.TrackContain>
                <S.TrackImg>
                    <S.TrackSvg alt="music">
                        <use
                            xlinkHref={
                                page === P.CATEGORY
                                    ? `../${TRACK_PATHS[0]}`
                                    : TRACK_PATHS[0]
                            }
                        />
                    </S.TrackSvg>
                </S.TrackImg>
                <S.TrackAuthor>
                    <S.TrackAuthorSpan>{currentTrack?.name}</S.TrackAuthorSpan>
                </S.TrackAuthor>
                <S.TrackAlbum>
                    <S.TrackAlbumSpan>{currentTrack?.author}</S.TrackAlbumSpan>
                </S.TrackAlbum>
            </S.TrackContain>
            <S.TrackLikeDis>
                <S.TrackLike
                    className="_btn-icon"
                    onClick={() => toggleLike(currentTrack?.id, false)}
                >
                    <S.TrackLikeSvg alt="like">
                        <use
                            xlinkHref={
                                page === P.CATEGORY
                                    ? `../${TRACK_PATHS[1]}`
                                    : TRACK_PATHS[1]
                            }
                        />
                    </S.TrackLikeSvg>
                </S.TrackLike>
                <S.TrackDislike
                    className="_btn-icon"
                    onClick={() => toggleLike(currentTrack?.id, true)}
                >
                    <S.TrackDislikeSvg alt="dislike">
                        <use
                            xlinkHref={
                                page === P.CATEGORY
                                    ? `../${TRACK_PATHS[2]}`
                                    : TRACK_PATHS[2]
                            }
                        />
                    </S.TrackDislikeSvg>
                </S.TrackDislike>
            </S.TrackLikeDis>
        </S.Track>
    );
};
