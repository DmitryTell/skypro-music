import { PageLayout } from "../../components/page-layout/index";

export const Page404 = ({ page, isOpenedMenu, setIsOpenedMenu }) => {
    return (
        <PageLayout
            page={page}
            isOpenedMenu={isOpenedMenu}
            setIsOpenedMenu={setIsOpenedMenu}
        />
    );
};
