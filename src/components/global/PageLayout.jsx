import { Nav } from "../nav/Nav";
import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { Sidebar } from "../sidebar/Sidebar";
import { Bar } from "../bar/Bar";
import * as S from "./App.styles";

export const PageLayout = ({
    page,
    title,
    tracks,
    isLoaded,
    isOpenedMenu,
    setIsOpenedMenu,
    player,
    setPlayer,
}) => {
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
                    <Content
                        page={page}
                        tracks={tracks}
                        isLoaded={isLoaded}
                        setPlayer={setPlayer}
                    />
                </S.MainCenterblock>
                <Sidebar page={page} isLoaded={isLoaded} />
            </S.Main>
            {player && <Bar page={page} player={player} />}
            <footer className="footer" />
        </S.Container>
    );
};
