import { useState } from "react";
import * as S from "./index.styles";
import * as P from "../../data/pages";
import { Author } from "../header_author_popup/index";
import { Year } from "../header_year_popup/index";
import { Genre } from "../header_genre_popup/index";
import { AUTHOR, GENRE, YEAR } from "../../data/popups";

const SVG_PATH = "img/icon/sprite.svg#icon-search";

export const Header = ({ page, title }) => {
    const [opened, setOpened] = useState(null);

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
                <S.SearchText type="search" placeholder="Поиск" name="search" />
            </S.Search>
            {page !== P.NOT_FOUND && <S.Title>{title}</S.Title>}
            {page === P.MAIN && (
                <S.Filter>
                    <S.FilterTitle>Искать по:</S.FilterTitle>
                    <S.FilterButton onClick={() => handleClick(AUTHOR)}>
                        исполнителю
                    </S.FilterButton>
                    {opened === AUTHOR && <Author />}
                    <S.FilterButton onClick={() => handleClick(YEAR)}>
                        году выпуска
                    </S.FilterButton>
                    {opened === YEAR && <Year />}
                    <S.FilterButton onClick={() => handleClick(GENRE)}>
                        жанру
                    </S.FilterButton>
                    {opened === GENRE && <Genre />}
                </S.Filter>
            )}
        </>
    );
};
