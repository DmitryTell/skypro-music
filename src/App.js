import { useEffect, useState } from "react";
import { GlobalStyles } from "./components/global/Global.styles";
import * as S from "./components/global/App.styles";
import { Nav } from "./components/nav/Nav";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Bar } from "./components/bar/Bar";
import * as T from "./data/titles";
import * as P from "./data/pages";
import { ALL_TRACKS } from "./data/all-tracks";

export const App = () => {
    const [tracks, setTracks] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaded(true);
            setTracks(ALL_TRACKS);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <GlobalStyles />
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        <Nav
                            page={P.MAIN}
                            isOpenedMenu={isOpenedMenu}
                            setIsOpenedMenu={setIsOpenedMenu}
                        />
                        <S.MainCenterblock>
                            <Header page={P.MAIN} title={T.MAIN_TITLE} />
                            <Content
                                page={P.MAIN}
                                tracks={tracks}
                                isLoaded={isLoaded}
                                setPlayer={setPlayer}
                            />
                        </S.MainCenterblock>
                        <Sidebar page={P.MAIN} isLoaded={isLoaded} />
                    </S.Main>
                    {player && <Bar page={P.MAIN} player={player} />}
                    <footer className="footer" />
                </S.Container>
            </S.Wrapper>
        </>
    );
};
