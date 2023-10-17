import { v4 as uuid } from "uuid";
import { Title } from "./Title";
import { Item } from "./Item";
import * as S from "./Content.styles";

export const Content = ({ page, tracks, isLoaded }) => {
    return (
        <S.Content>
            <Title page={page} />
            <S.ContentPlaylist>
                {tracks.map((track) => (
                    <Item
                        key={uuid()}
                        page={page}
                        track={track}
                        isLoaded={isLoaded}
                    />
                ))}
            </S.ContentPlaylist>
        </S.Content>
    );
};
