import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllTracksQuery } from "../services/player";
import { PageLayout } from "../components/global/PageLayout";
import { addAllTracks, getNewId, shuffleTracks } from "../store/slices/player";
import {
    playerCurrentIdSelector,
    playerISShuffledSelector,
    playerShuffledTracksIdsSelector,
    playerTracksIdsSelector,
} from "../store/selectors/player";

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

    const allIds = useSelector(playerTracksIdsSelector);
    const shuffledIds = useSelector(playerShuffledTracksIdsSelector);
    const isShuffled = useSelector(playerISShuffledSelector);
    const currentId = useSelector(playerCurrentIdSelector);

    useEffect(() => {
        if (!isShuffled) {
            dispatch(getNewId({ ids: allIds, currentId }));
        } else {
            dispatch(getNewId({ ids: shuffledIds, currentId }));
        }
    }, [currentId, isShuffled]);
    useEffect(() => {
        setNewError(null);

        if (error) {
            setNewError(error);
        }

        if (data) {
            dispatch(addAllTracks({ tracks: data }));
            dispatch(shuffleTracks({ tracks: data }));
        }
    }, [data]);

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
