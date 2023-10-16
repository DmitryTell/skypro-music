import { v4 as uuid } from "uuid";
import * as S from "./Header.styles";

export const Author = () => {
    const AUTHORS = [
        "Michael Jackson",
        "Frank Sinatra",
        "Calvin Harris",
        "Zhu",
        "Arctic Monkeys",
        "Hui mamin",
    ];

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
