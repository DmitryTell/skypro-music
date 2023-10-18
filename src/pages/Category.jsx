import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "../components/global/PageLayout";
import { ITEMS } from "../data/category-items";

export const Category = ({
    page,
    tracks,
    setTracks,
    isLoaded,
    setIsLoaded,
    isOpenedMenu,
    setIsOpenedMenu,
    player,
    setPlayer,
    newError,
    setNewError,
}) => {
    const params = useParams();

    const category = ITEMS.find((item) => item.id === Number(params.id));

    useEffect(() => {
        setTracks([]);
        setIsLoaded(false);
        setNewError(`Список пуст. Страница: ${category.title}`);
    }, []);

    return (
        <PageLayout
            page={page}
            title={category.title}
            tracks={tracks}
            isLoaded={isLoaded}
            isOpenedMenu={isOpenedMenu}
            setIsOpenedMenu={setIsOpenedMenu}
            player={player}
            setPlayer={setPlayer}
            newError={newError}
        />
    );
};
