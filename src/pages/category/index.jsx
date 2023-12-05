import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../components/page-layout/index";
import {
    commonCategoryTitleSelector,
    commonNewErrorSelector,
    commonSelectionListSelector,
} from "../../store/selectors/common";
import { useGetCategoryTracksQuery } from "../../services/playlist";
import { setNewError } from "../../store/slices/common";

export const Category = ({ page }) => {
    const params = useParams();
    const dispatch = useDispatch();

    const selectionList = useSelector(commonSelectionListSelector);
    const newError = useSelector(commonNewErrorSelector);
    const categoryTitle = useSelector(commonCategoryTitleSelector);

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
