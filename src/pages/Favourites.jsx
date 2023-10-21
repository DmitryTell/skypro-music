import { useEffect } from "react";
import { PageLayout } from "../components/global/PageLayout";

export const Favourites = ({
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
    currentTime,
    setCurrentTime,
    duration,
    volume,
    setVolume,
    isLoop,
    isPlaying,
    controls,
}) => {
    useEffect(() => {
        setIsLoaded(false);
        setTracks([]);
        setNewError("Список треков пуст");
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
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            volume={volume}
            setVolume={setVolume}
            isLoop={isLoop}
            isPlaying={isPlaying}
            controls={controls}
        />
    );
};
