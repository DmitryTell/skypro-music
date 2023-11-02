import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "./Title";
import { Item } from "./Item";
import * as S from "./Content.styles";
import { useUserContext } from "../../context/user";
import { addAllTracks, shuffleTracks } from "../../store/slices/player";

export const Content = ({ page, tracks, isLoading, newError }) => {
    const { userId } = useUserContext();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addAllTracks({ tracks }));
        dispatch(shuffleTracks({ tracks }));
    }, [page, isLoading]);

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
