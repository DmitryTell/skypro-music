import { useSelector, useDispatch } from "react-redux";
import { PageLayout } from "../../components/page-layout/index";
import { useGetAllTracksQuery } from "../../services/playlist";
import { setNewError } from "../../store/slices/user";
import { userNewErrorSelector } from "../../store/selectors/user";

export const Main = ({ page }) => {
    const emptyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    const { data, error, isLoading } = useGetAllTracksQuery();
    const dispatch = useDispatch();

    const newError = useSelector(userNewErrorSelector);

    if (error) {
        dispatch(setNewError({ textError: `Ошибка загрузки: ${error.error}` }));
    }

    return (
        <PageLayout
            page={page}
            title="Треки"
            tracks={data ?? emptyList}
            isLoading={isLoading}
            newError={newError}
        />
    );
};
