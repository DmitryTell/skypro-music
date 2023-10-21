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
    currentTime,
    setCurrentTime,
    duration,
    volume,
    setVolume,
    isLoop,
    isPlaying,
    controls,
}) => {
    const params = useParams();
    const category = ITEMS.find((item) => item.id === Number(params.id));

    useEffect(() => {
        window.localStorage.setItem("PAGE", `${page}/${category.id}`);

        setTracks([]);
        setIsLoaded(false);
        setNewError(null);
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
