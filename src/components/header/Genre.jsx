import { v4 as uuid } from "uuid";
import * as S from "./Header.styles";

export const Genre = () => {
    const GENRES = ["Рок", "Хип-хоп", "Поп-музыка", "Техно", "Инди"];

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
