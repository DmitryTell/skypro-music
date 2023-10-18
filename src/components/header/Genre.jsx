import { v4 as uuid } from "uuid";
import * as S from "./Header.styles";

export const Genre = ({ tracks }) => {
    const GENRES = [...new Set(tracks.map((track) => track.genre))];

    return (
        <S.Genre>
            <S.PopupContainer>
                {GENRES?.map((genre) => (
                    <S.PopupLink href="/#" key={uuid()}>
                        {genre}
                    </S.PopupLink>
                ))}
            </S.PopupContainer>
        </S.Genre>
    );
};
