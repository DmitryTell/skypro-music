import { PageLayout } from "../components/global/PageLayout";

export const Page404 = ({ page, isOpenedMenu, setIsOpenedMenu }) => {
    return (
        <PageLayout
            page={page}
            isOpenedMenu={isOpenedMenu}
            setIsOpenedMenu={setIsOpenedMenu}
        />
    );
};
