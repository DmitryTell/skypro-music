import { useEffect, useState } from "react";
import { GlobalStyles } from "./components/global/Global.styles";
import { PageLayout } from "./components/global/PageLayout";
import * as S from "./components/global/App.styles";
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
                <PageLayout
                    page={P.MAIN}
                    title={T.MAIN_TITLE}
                    tracks={tracks}
                    isLoaded={isLoaded}
                    isOpenedMenu={isOpenedMenu}
                    setIsOpenedMenu={setIsOpenedMenu}
                    player={player}
                    setPlayer={setPlayer}
                />
            </S.Wrapper>
        </>
    );
};
