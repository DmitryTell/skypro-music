import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllTracksQuery } from "../services/player";
import { PageLayout } from "../components/global/PageLayout";
import { addAllTracks } from "../store/slices/player";

export const Main = ({
    page,
    title,
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
    const { data, error, isLoading } = useGetAllTracksQuery();

    useEffect(() => {
        setNewError(null);

        if (error) {
            setNewError(error);
        }

        if (data) {
            dispatch(addAllTracks({ tracks: data }));
        }
    });

    return (
        <PageLayout
            page={page}
            title={title}
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
