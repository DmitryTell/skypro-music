import { useState } from "react";
import { GlobalStyles } from "./components/global/Global.styles";
import { AppRoutes } from "./pages/AppRoutes";
import * as S from "./components/global/App.styles";

export const App = () => {
    const USER = window.localStorage.getItem("user");

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
    const [newError, setNewError] = useState(null);

    return (
        <>
            <GlobalStyles />
            <S.Wrapper>
                <AppRoutes
                    user={USER}
                    tracks={tracks}
                    setTracks={setTracks}
                    isLoaded={isLoaded}
                    setIsLoaded={setIsLoaded}
                    isOpenedMenu={isOpenedMenu}
                    setIsOpenedMenu={setIsOpenedMenu}
                    player={player}
                    setPlayer={setPlayer}
                    newError={newError}
                    setNewError={setNewError}
                />
            </S.Wrapper>
        </>
    );
};
