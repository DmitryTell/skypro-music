import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageLayout } from "../../components/page-layout/index";
import { useGetAllTracksQuery } from "../../services/playlist";
import { setNewError } from "../../store/slices/user";
import { userNewErrorSelector } from "../../store/selectors/user";
import {
    filterAuthorsSelector,
    filterGenresSelector,
    filterYearSelector,
} from "../../store/selectors/filters";
import { addAllTracks } from "../../store/slices/player";
import { playerAllTracksSelector } from "../../store/selectors/player";
import { filterTracks } from "../../data/secondary-functions";

export const Main = ({ page }) => {
    const emptyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    const { data, error, isLoading } = useGetAllTracksQuery();
    const dispatch = useDispatch();

    const allTracks = useSelector(playerAllTracksSelector);
    const newError = useSelector(userNewErrorSelector);
    const authorsFilter = useSelector(filterAuthorsSelector);
    const genresFilter = useSelector(filterGenresSelector);
    const yearFilter = useSelector(filterYearSelector);

    const [tracks, setTracks] = useState(null);

    if (error) {
        dispatch(setNewError({ textError: `Ошибка загрузки: ${error.error}` }));
    }

    useEffect(() => {
        if (data) {
            dispatch(addAllTracks({ tracks: data }));
            setTracks(data);
        }
    }, [data]);
    useEffect(() => {
        setTracks(
            filterTracks(allTracks, authorsFilter, genresFilter, yearFilter),
        );
    }, [authorsFilter, genresFilter, yearFilter]);

    return (
        <PageLayout
            page={page}
            title="Треки"
            tracks={tracks ?? emptyList}
            isLoading={isLoading}
            newError={newError}
        />
    );
};
