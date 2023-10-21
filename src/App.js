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
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(null);
    const [volume, setVolume] = useState(40);
    const [isPlaying, setIsPlaying] = useState(false);

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
        handleChangeProgress: () => {
            audioRef.current.currentTime = currentTime;
        },
    };
    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    useEffect(() => {
        const currentDuration = audioRef.current.duration;

        if (!currentDuration || Number.isNaN(currentDuration)) {
            setDuration(190);
        } else {
            setDuration(currentDuration);
        }
    });
    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", updateTime);

        return () =>
            audioRef.current.removeEventListener("timeupdate", updateTime);
    });
    useEffect(() => {
        if (player) {
            audioRef.current.src = player.link;
            setIsPlaying(true);
        }
    }, [player]);
    useEffect(() => {
        audioRef.current.volume = volume / 100;
    }, [volume]);

    return (
        <>
            <audio autoPlay ref={audioRef}>
                <source src={player?.link} type="audio/mpeg" />
            </audio>
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
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime}
                    duration={duration}
                    volume={volume}
                    setVolume={setVolume}
                    isLoop={isLoop}
                    isPlaying={isPlaying}
                    controls={controls}
                />
            </S.Wrapper>
        </>
    );
};
