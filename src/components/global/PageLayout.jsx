import { NotFound } from "../not-found/NotFound";
import { Nav } from "../nav/Nav";
import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { Sidebar } from "../sidebar/Sidebar";
import { Bar } from "../bar/Bar";
import * as S from "./App.styles";
import * as P from "../../data/pages";

export const PageLayout = ({
    page,
    title,
    isLoading,
    isOpenedMenu,
    setIsOpenedMenu,
    player,
    setPlayer,
    newError,
    currentTime,
    setCurrentTime,
    duration,
    volume,
    setVolume,
    controls,
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
                    {page !== P.NOT_FOUND ? (
                        <Content
                            page={page}
                            isLoading={isLoading}
                            setPlayer={setPlayer}
                            newError={newError}
                        />
                    ) : (
                        <NotFound />
                    )}
                </S.MainCenterblock>
                <Sidebar page={page} isLoading={isLoading} />
            </S.Main>
            {player && (
                <Bar
                    page={page}
                    player={player}
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime}
                    duration={duration}
                    volume={volume}
                    setVolume={setVolume}
                    controls={controls}
                />
            )}
            <footer className="footer" />
        </S.Container>
    );
};
