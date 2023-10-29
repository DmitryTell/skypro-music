import { useEffect } from "react";
import { PageLayout } from "../components/global/PageLayout";

export const Favourites = ({
    page,
    title,
    tracks,
    setTracks,
    isLoading,
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
    controls,
}) => {
    useEffect(() => {
        setNewError(null);
        setTracks([]);
    }, []);

    return (
        <PageLayout
            page={page}
            title={title}
            tracks={tracks}
            setTracks={setTracks}
            isLoading={isLoading}
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
            controls={controls}
        />
    );
};
