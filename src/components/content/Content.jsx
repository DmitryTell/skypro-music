import { v4 as uuid } from "uuid";
import { Title } from "./Title";
import { Item } from "./Item";
import * as S from "./Content.styles";
import { useUserContext } from "../../context/user";

export const Content = ({ page, tracks, isLoading, setPlayer, newError }) => {
    const { userId } = useUserContext();

    return (
        <S.Content>
            <Title page={page} />
            {newError ? (
                <S.ContentPlaylistErrorText>
                    {newError}
                </S.ContentPlaylistErrorText>
            ) : (
                <S.ContentPlaylist>
                    {tracks.length ? (
                        tracks.map((track) => (
                            <Item
                                key={uuid()}
                                page={page}
                                track={track}
                                userId={userId}
                                staredUser={track.stared_user}
                                isLoading={isLoading}
                                setPlayer={setPlayer}
                            />
                        ))
                    ) : (
                        <S.ContentPlaylistErrorText>
                            Список треков пуст
                        </S.ContentPlaylistErrorText>
                    )}
                    <S.PlaylistLastItem />
                </S.ContentPlaylist>
            )}
        </S.Content>
    );
};
