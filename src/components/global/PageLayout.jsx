import { useSelector } from "react-redux";
import { NotFound } from "../not-found/NotFound";
import { Nav } from "../nav/Nav";
import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { Sidebar } from "../sidebar/Sidebar";
import { Bar } from "../bar/Bar";
import * as S from "./App.styles";
import * as P from "../../data/pages";
import { playerCurrentTrackSelector } from "../../store/selectors/player";

export const PageLayout = ({
    page,
    title,
    tracks,
    isLoading,
    isOpenedMenu,
    setIsOpenedMenu,
    newError,
}) => {
    const currentTrack = useSelector(playerCurrentTrackSelector);

    return (
        <S.Container>
            <S.Main>
                <Nav
                    page={page}
                    isOpenedMenu={isOpenedMenu}
                    setIsOpenedMenu={setIsOpenedMenu}
                />
                <S.MainCenterblock>
                    <Header page={page} title={title} />
                    {page !== P.NOT_FOUND ? (
                        <Content
                            page={page}
                            tracks={tracks}
                            isLoading={isLoading}
                            newError={newError}
                        />
                    ) : (
                        <NotFound />
                    )}
                </S.MainCenterblock>
                <Sidebar page={page} isLoading={isLoading} />
            </S.Main>
            {currentTrack && <Bar page={page} />}
            <footer className="footer" />
        </S.Container>
    );
};
