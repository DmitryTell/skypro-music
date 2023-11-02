import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../components/page-layout/index";
import { ITEMS } from "../../data/category-items";

export const Category = ({
    page,
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
    const params = useParams();
    const category = ITEMS.find((item) => item.id === Number(params.id));

    useEffect(() => {
        setNewError(null);
        setTracks([]);
    }, []);

    return (
        <PageLayout
            page={page}
            title={category.title}
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
