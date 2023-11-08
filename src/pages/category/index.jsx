import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../components/page-layout/index";
import {
    userCategoryTitleSelector,
    userNewErrorSelector,
    userSelectionListSelector,
} from "../../store/selectors/user";
import { getSelectionItem } from "../../api/selection";
import { setCategoryTracks } from "../../store/slices/player";
import { setCategoryTitle, setNewError } from "../../store/slices/user";
import { playerCategoryTracksSelector } from "../../store/selectors/player";

export const Category = ({ page }) => {
    const params = useParams();
    const dispatch = useDispatch();

    const selectionList = useSelector(userSelectionListSelector);
    const newError = useSelector(userNewErrorSelector);
    const categoryTitle = useSelector(userCategoryTitleSelector);
    const categoryTracks = useSelector(playerCategoryTracksSelector);

    const category = selectionList.find(({ id }) => id === Number(params.id));
    const emptyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    useEffect(() => {
        getSelectionItem(category?.id)
            .then((data) => {
                dispatch(setCategoryTracks({ tracks: data.items }));
                dispatch(setCategoryTitle({ title: data.name }));
            })
            .catch((error) =>
                dispatch(
                    setNewError({
                        textError: `Ошибка загрузки: ${error.message}`,
                    }),
                ),
            );
    }, []);

    return (
        <PageLayout
            page={page}
            title={categoryTitle}
            tracks={categoryTracks?.length ? categoryTracks : emptyList}
            isLoading={!categoryTracks?.length}
            newError={newError}
        />
    );
};
