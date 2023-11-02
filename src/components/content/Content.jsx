import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "./Title";
import { Item } from "./Item";
import * as S from "./Content.styles";
import { useUserContext } from "../../context/user";
import { addAllTracks, getNewId } from "../../store/slices/player";

export const Content = ({ page, tracks, isLoading, newError }) => {
    const currentId = tracks[0]?.id;

    const { userId } = useUserContext();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoading) {
            dispatch(addAllTracks({ tracks }));
            dispatch(
                getNewId({
                    ids: [...tracks.map(({ id }) => id)],
                    currentId: currentId - 1,
                }),
            );
        }
    }, [isLoading]);

    return (
        <S.Content>
            <Title page={page} />
            {newError ? (
                <S.ContentPlaylistErrorText>
                    {newError}
                </S.ContentPlaylistErrorText>
            ) : (
                <S.ContentPlaylist>
                    {tracks &&
                        tracks.map((track, index) => (
                            <Item
                                key={
                                    track.id ? String(track.id) : String(index)
                                }
                                page={page}
                                track={track}
                                userId={userId}
                                staredUser={track.stared_user}
                                isLoading={isLoading}
                            />
                        ))}
                    <S.PlaylistLastItem />
                    {!tracks?.length && (
                        <S.ContentPlaylistErrorText>
                            Список треков пуст
                        </S.ContentPlaylistErrorText>
                    )}
                </S.ContentPlaylist>
            )}
        </S.Content>
    );
};
