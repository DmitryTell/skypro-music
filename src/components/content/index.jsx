import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "../content_title";
import { Item } from "../content_item";
import * as S from "./index.styles";
import { useUserContext } from "../../context/user";
import { setNewError } from "../../store/slices/user";

export const Content = ({
    page,
    tracks,
    isLoading,
    newError,
    searchingText,
    authors,
    genres,
}) => {
    const { userId } = useUserContext();
    const dispatch = useDispatch();

    useEffect(() => {
        if (tracks?.length) {
            dispatch(setNewError({ textError: null }));
        } else if (searchingText || authors?.length || genres?.length) {
            dispatch(setNewError({ textError: "Ничего не найдено :(" }));
        } else {
            dispatch(setNewError({ textError: "Список треков пуст" }));
        }
    }, [tracks?.length, searchingText, authors, genres]);

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
        </S.Content>
    );
};
