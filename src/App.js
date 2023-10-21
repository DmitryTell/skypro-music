import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyles } from "./components/global/Global.styles";
import { AppRoutes } from "./pages/AppRoutes";
import { UserContext } from "./context/user";
import * as S from "./components/global/App.styles";
import * as P from "./data/pages";

export const App = () => {
    const [user, setUser] = useState(null);
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
    const [duration, setDuration] = useState(190);
    const [volume, setVolume] = useState(40);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);
    const navigate = useNavigate();

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
    const clearUser = () => {
        window.localStorage.clear();

        navigate("/login");
    };

    const contextUser = useMemo(() => ({
        username: user?.username,
        clearUser,
    }));

    useEffect(() => {
        const userJson = window.localStorage.getItem("USER");
        const currentPage = window.localStorage.getItem("PAGE");

        if (userJson) {
            setUser(JSON.parse(userJson));

            switch (currentPage) {
                case P.MAIN:
                    navigate("/", { replace: true });
                    break;
                case P.FAVOURITES:
                    navigate("/favourites", { replace: true });
                    break;
                case `${P.CATEGORY}/1`:
                    navigate("category/1", { replace: true });
                    break;
                case `${P.CATEGORY}/2`:
                    navigate("category/2", { replace: true });
                    break;
                case `${P.CATEGORY}/3`:
                    navigate("category/3", { replace: true });
                    break;
                default:
                    navigate("/", { replace: true });
                    break;
            }
        }
    }, []);
    useEffect(() => {
        const currentDuration = audioRef.current.duration;

        if (currentDuration && !Number.isNaN(currentDuration)) {
            setDuration(currentDuration);
        }
    }, [audioRef.current?.duration]);
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
                <UserContext.Provider value={contextUser}>
                    <AppRoutes
                        user={user}
                        setUser={setUser}
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
                </UserContext.Provider>
            </S.Wrapper>
        </>
    );
};
