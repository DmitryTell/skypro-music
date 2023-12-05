import { useSelector, useDispatch } from "react-redux";
import { PageLayout } from "../../components/page-layout/index";
import { useGetAllFavouriteTracksQuery } from "../../services/playlist";
import { setNewError } from "../../store/slices/common";
import { commonNewErrorSelector } from "../../store/selectors/common";

export const Favourites = ({ page }) => {
    const emptyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    const { data, error, isLoading } = useGetAllFavouriteTracksQuery();
    const dispatch = useDispatch();

    const newError = useSelector(commonNewErrorSelector);

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
