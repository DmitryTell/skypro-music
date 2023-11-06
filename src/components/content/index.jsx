import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "../content_title";
import { Item } from "../content_item";
import * as S from "./index.styles";
import { useUserContext } from "../../context/user";
import { addAllTracks } from "../../store/slices/player";

export const Content = ({ page, tracks, isLoading, newError }) => {
    const { userId } = useUserContext();
    const dispatch = useDispatch();

    useEffect(() => {
        if (tracks) {
            dispatch(addAllTracks({ tracks }));
        }
    }, [tracks]);

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
                </S.ContentPlaylist>
            )}
            {!tracks?.length && (
                <S.ContentPlaylistErrorText>
                    Список треков пуст
                </S.ContentPlaylistErrorText>
            )}
        </S.Content>
    );
};
