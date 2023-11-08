import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageLayout } from "../../components/page-layout/index";
import { useGetAllFavouriteTracksQuery } from "../../services/playlist";
import { setNewError } from "../../store/slices/user";
import { userNewErrorSelector } from "../../store/selectors/user";
import { addAllTracks } from "../../store/slices/player";

export const Favourites = ({ page }) => {
    const emptyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    const { data, error, isLoading } = useGetAllFavouriteTracksQuery();
    const dispatch = useDispatch();

    const newError = useSelector(userNewErrorSelector);

    if (error) {
        if (error.status === 401) {
            dispatch(
                setNewError({
                    textError: `Ошибка загрузки: ${error.data.detail}`,
                }),
            );
        } else {
            dispatch(
                setNewError({ textError: `Oшибка загрузки: ${error.error}` }),
            );
        }
    }

    useEffect(() => {
        if (data) {
            dispatch(addAllTracks({ tracks: data }));
        }
    }, [data]);

    return (
        <PageLayout
            page={page}
            title="Мои треки"
            tracks={data ?? emptyList}
            isLoading={isLoading}
            newError={newError}
        />
    );
};
