import { useState, useRef, useEffect } from "react";
import { GlobalStyles } from "./components/global/Global.styles";
import { AppRoutes } from "./pages/AppRoutes";
import * as S from "./components/global/App.styles";

export const App = () => {
    const USER = window.localStorage.getItem("user");

    const audioRef = useRef(null);

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
    const [isLoop, setIsLoop] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (player) {
            audioRef.current.src = player.link;
            setIsPlaying(true);
        }
    }, [player]);

    const controls = {
        handlePlay: () => {
            audioRef.current.play();
            setIsPlaying(true);
        },
        handlePause: () => {
            audioRef.current.pause();
            setIsPlaying(false);
        },
        toggleLoop: () => {
            audioRef.current.loop = !isLoop;
            setIsLoop(!isLoop);
        },
    };

    return (
        <>
            {player && (
                <audio controls autoPlay ref={audioRef}>
                    <source src={player?.link} type="audio/mpeg" />
                </audio>
            )}
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
                    isLoop={isLoop}
                    isPlaying={isPlaying}
                    controls={controls}
                />
            </S.Wrapper>
        </>
    );
};
