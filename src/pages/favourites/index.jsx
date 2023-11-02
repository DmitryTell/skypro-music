import { useSelector, useDispatch } from "react-redux";
import { PageLayout } from "../../components/page-layout/index";
import { useGetAllFavouriteTracksQuery } from "../../services/playlist";
import { setNewError } from "../../store/slices/user";
import { userNewErrorSelector } from "../../store/selectors/user";

export const Favourites = ({ page, title }) => {
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

    return (
        <PageLayout
            page={page}
            title={title}
            tracks={data ?? emptyList}
            isLoading={isLoading}
            newError={newError}
        />
    );
};
