import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PageLayout } from "../components/global/PageLayout";
import { useGetAllTracksQuery } from "../services/playlist";
import { addAllTracks, shuffleTracks } from "../store/slices/playlist";

export const Main = ({
    page,
    title,
    tracks,
    setTracks,
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
        if (error) {
            setNewError(`Ошибка загрузки: ${error.error}`);
        }
    }, [error]);
    useEffect(() => {
        if (data) {
            setNewError(null);
            dispatch(addAllTracks({ tracks: data }));
            dispatch(shuffleTracks({ tracks: data }));
            setTracks(data);
        }
    }, [data]);

    return (
        <PageLayout
            page={page}
            title={title}
            tracks={tracks}
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
