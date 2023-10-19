import { useEffect } from "react";
import { PageLayout } from "../components/global/PageLayout";
import { getTracks } from "../api/tracks";

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
    isLoop,
    isPlaying,
    controls,
}) => {
    useEffect(() => {
        getTracks()
            .then((allTracks) => {
                setTracks(allTracks);
                setIsLoaded(true);
            })
            .catch((error) => setNewError(`Ошибка загрузки. ${error.message}`));
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
            isLoop={isLoop}
            isPlaying={isPlaying}
            controls={controls}
        />
    );
};
