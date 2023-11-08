import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../components/page-layout/index";
import {
    userCategoryTitleSelector,
    userNewErrorSelector,
    userSelectionListSelector,
} from "../../store/selectors/user";
import { useGetCategoryTracksQuery } from "../../services/playlist";
import { setNewError } from "../../store/slices/user";

export const Category = ({ page }) => {
    const params = useParams();
    const dispatch = useDispatch();

    const selectionList = useSelector(userSelectionListSelector);
    const newError = useSelector(userNewErrorSelector);
    const categoryTitle = useSelector(userCategoryTitleSelector);

    const category = selectionList.find(({ id }) => id === Number(params.id));
    const emptyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    const { data, error, isLoading } = useGetCategoryTracksQuery(category?.id);

    if (error) {
        dispatch(setNewError({ textError: "Ошибка загрузки" }));
    }

    return (
        <PageLayout
            page={page}
            title={categoryTitle}
            tracks={data ? data?.items : emptyList}
            isLoading={isLoading}
            newError={newError}
        />
    );
};
