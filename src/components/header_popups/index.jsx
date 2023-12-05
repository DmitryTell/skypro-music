import * as S from "./index.styles";
import { setAuthor, setGenre, setYear } from "../../store/slices/filters";

export const Author = ({ tracks, authorsFilter, dispatch }) => {
    const AUTHORS = [...new Set(tracks.map((track) => track.author))];

    const handleClick = (e, author) => {
        e.preventDefault();

        const is = authorsFilter.includes(author);

        dispatch(setAuthor({ author, is }));
    };

    return (
        <S.Author>
            <S.PopupContainer>
                {AUTHORS?.map((author, index) => (
                    <S.PopupLink
                        href="/#"
                        key={String(index)}
                        $color={
                            authorsFilter.includes(author) ? "#b672ff" : "#fff"
                        }
                        onClick={(e) => handleClick(e, author)}
                    >
                        {author}
                    </S.PopupLink>
                ))}
            </S.PopupContainer>
        </S.Author>
    );
};
export const Genre = ({ tracks, genresFilter, dispatch }) => {
    const GENRES = [...new Set(tracks.map((track) => track.genre))];

    const handleClick = (e, genre) => {
        e.preventDefault();

        const is = genresFilter.includes(genre);

        dispatch(setGenre({ genre, is }));
    };

    return (
        <S.Genre>
            <S.PopupContainer>
                {GENRES?.map((genre, index) => (
                    <S.PopupLink
                        href="/#"
                        key={String(index)}
                        $color={
                            genresFilter.includes(genre) ? "#b672ff" : "#fff"
                        }
                        onClick={(e) => handleClick(e, genre)}
                    >
                        {genre}
                    </S.PopupLink>
                ))}
            </S.PopupContainer>
        </S.Genre>
    );
};
export const Year = ({ yearFilter, dispatch }) => {
    const YEARS = ["По умолчанию", "Сначала новые", "Сначала старые"];

    const handleClick = (e, year) => {
        e.preventDefault();

        dispatch(setYear({ year }));
    };

    return (
        <S.Year>
            <S.PopupContainer>
                {YEARS?.map((year, index) => (
                    <S.PopupLink
                        href="/#"
                        key={String(index)}
                        $color={yearFilter === year ? "#b672ff" : "#fff"}
                        onClick={(e) => handleClick(e, year)}
                    >
                        {year}
                    </S.PopupLink>
                ))}
            </S.PopupContainer>
        </S.Year>
    );
};
