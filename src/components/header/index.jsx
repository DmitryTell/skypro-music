import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./index.styles";
import * as P from "../../data/pages";
import { Author, Genre, Year } from "../header_popups";
import { AUTHOR, GENRE, YEAR } from "../../data/popups";
import { setSearchText } from "../../store/slices/filters";
import { playerAllTracksSelector } from "../../store/selectors/player";
import {
    filterAuthorsSelector,
    filterGenresSelector,
    filterYearSelector,
} from "../../store/selectors/filters";

const SVG_PATH = "img/icon/sprite.svg#icon-search";

export const Header = ({ page, title }) => {
    const [opened, setOpened] = useState(null);
    const dispatch = useDispatch();

    const tracks = useSelector(playerAllTracksSelector);
    const authorsFilter = useSelector(filterAuthorsSelector);
    const genresFilter = useSelector(filterGenresSelector);
    const yearFilter = useSelector(filterYearSelector);

    const handleClick = (popup) => {
        if (popup === opened) {
            setOpened(null);
            return;
        }

        setOpened(null);
        setOpened(popup);
    };

    return (
        <>
            <S.Search>
                <S.SearchSvg>
                    <use
                        xlinkHref={
                            page === P.CATEGORY ? `../${SVG_PATH}` : SVG_PATH
                        }
                    />
                </S.SearchSvg>
                <S.SearchText
                    type="search"
                    placeholder="Поиск"
                    name="search"
                    onChange={(e) =>
                        dispatch(setSearchText({ text: e.target.value }))
                    }
                />
            </S.Search>
            {page !== P.NOT_FOUND && <S.Title>{title}</S.Title>}
            {page === P.MAIN && (
                <S.Filter>
                    <S.FilterTitle>Искать по:</S.FilterTitle>
                    <S.FilterButton
                        $color={authorsFilter?.length ? "#B672FF" : "#fff"}
                        onClick={() => handleClick(AUTHOR)}
                    >
                        исполнителю
                    </S.FilterButton>
                    {authorsFilter?.length > 0 && (
                        <S.FilterLengthAuthor>
                            {authorsFilter?.length}
                        </S.FilterLengthAuthor>
                    )}
                    {opened === AUTHOR && (
                        <Author
                            tracks={tracks}
                            authorsFilter={authorsFilter}
                            dispatch={dispatch}
                        />
                    )}
                    <S.FilterButton
                        $color="#fff"
                        onClick={() => handleClick(YEAR)}
                    >
                        году выпуска
                    </S.FilterButton>
                    {opened === YEAR && (
                        <Year yearFilter={yearFilter} dispatch={dispatch} />
                    )}
                    <S.FilterButton
                        $color={genresFilter?.length ? "#B672FF" : "#fff"}
                        onClick={() => handleClick(GENRE)}
                    >
                        жанру
                    </S.FilterButton>
                    {genresFilter?.length > 0 && (
                        <S.FilterLengthGenre>
                            {genresFilter?.length}
                        </S.FilterLengthGenre>
                    )}
                    {opened === GENRE && (
                        <Genre
                            tracks={tracks}
                            genresFilter={genresFilter}
                            dispatch={dispatch}
                        />
                    )}
                </S.Filter>
            )}
        </>
    );
};
