import { useEffect } from "react";
import { PageLayout } from "../components/global/PageLayout";
import { ALL_TRACKS } from "../data/all-tracks";

export const Main = ({
    page,
    title,
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
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaded(true);
            setTracks(ALL_TRACKS);
            setNewError(null);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <PageLayout
            page={page}
            title={title}
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
