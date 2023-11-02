import { PageLayout } from "../components/global/PageLayout";
import { useGetAllTracksQuery } from "../services/playlist";

export const Main = ({
    page,
    title,
    isOpenedMenu,
    setIsOpenedMenu,
    newError,
    setNewError,
}) => {
    const emptyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    const { data, error, isLoading } = useGetAllTracksQuery();

    if (error) {
        setNewError(`Ошибка загрузки: ${error.error}`);
    }

    return (
        <PageLayout
            page={page}
            title={title}
            tracks={data ?? emptyList}
            isLoading={isLoading}
            isOpenedMenu={isOpenedMenu}
            setIsOpenedMenu={setIsOpenedMenu}
            newError={newError}
        />
    );
};
