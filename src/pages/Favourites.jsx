import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageLayout } from "../components/global/PageLayout";
import { useGetAllFavouriteTracksQuery } from "../services/playlist";
import { makeMergTracks } from "../data/secondary-functions";
import { playerAllTracksSelector } from "../store/selectors/player";
import { refreshToken } from "../api/user";
import { setToken } from "../store/slices/token";
import { useUserContext } from "../context/user";

export const Favourites = ({
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
    const allTracks = useSelector(playerAllTracksSelector);

    const { data, error, isLoading } = useGetAllFavouriteTracksQuery();
    const dispatch = useDispatch();

    const { clearUser } = useUserContext();

    useEffect(() => {
        const tokenRefresh = window.localStorage.getItem("REFRESH");

        if (error) {
            if (error.status === 401) {
                setNewError(`Ошибка загрузки: ${error.data.detail}`);

                refreshToken(tokenRefresh)
                    .then((newToken) => {
                        dispatch(
                            setToken({
                                access: newToken.access,
                                refresh: tokenRefresh,
                            }),
                        );
                    })
                    .catch(() => clearUser());
            } else {
                setNewError(`Ошибка загрузки: ${error.error}`);
            }
        }
    }, [error]);
    useEffect(() => {
        setTracks([{}, {}, {}, {}, {}]);

        if (data) {
            const favouriteTracks = makeMergTracks(allTracks, data);

            setNewError(null);
            setTracks(favouriteTracks);
        }
    }, [data]);

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
