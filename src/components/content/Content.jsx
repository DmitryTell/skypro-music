import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { Title } from "./Title";
import { Item } from "./Item";
import * as S from "./Content.styles";
import { playerAllTracksSelector } from "../../store/selectors/player";

export const Content = ({ page, isLoading, setPlayer, newError }) => {
    const tracks = useSelector(playerAllTracksSelector);

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
