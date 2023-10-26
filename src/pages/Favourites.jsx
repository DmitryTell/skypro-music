import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PageLayout } from "../components/global/PageLayout";
import { addAllTracks } from "../store/slices/player";

export const Favourites = ({
    page,
    title,
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
    controls,
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoaded(false);
        setNewError(null);
        dispatch(addAllTracks({ tracks: [] }));
    }, []);

    return (
        <PageLayout
            page={page}
            title={title}
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
            controls={controls}
        />
    );
};
