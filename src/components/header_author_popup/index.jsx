import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import * as S from "./index.styles";
import { playerAllTracksSelector } from "../../store/selectors/player";

export const Author = () => {
    const tracks = useSelector(playerAllTracksSelector);

    const AUTHORS = [...new Set(tracks.map((track) => track.author))];

    return (
        <S.Author>
            <S.PopupContainer>
                {AUTHORS?.map((author) => (
                    <S.PopupLink href="/#" key={uuid()}>
                        {author}
                    </S.PopupLink>
                ))}
            </S.PopupContainer>
        </S.Author>
    );
};
