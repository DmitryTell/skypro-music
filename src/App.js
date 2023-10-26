import { useState, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GlobalStyles } from "./components/global/Global.styles";
import { AppRoutes } from "./pages/AppRoutes";
import { UserContext } from "./context/user";
import * as S from "./components/global/App.styles";
import {
    playerIsLoopSelector,
    playerIsPausedSelector,
} from "./store/selectors/player";
import {
    toggleIsLoop,
    toggleIsPaused,
    toggleIsShuffled,
} from "./store/slices/player";

export const App = () => {
    const isLoop = useSelector(playerIsLoopSelector);
    const isPaused = useSelector(playerIsPausedSelector);

    const [user, setUser] = useState(null);
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);
    const [player, setPlayer] = useState(null);
    const [newError, setNewError] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(190);
    const [volume, setVolume] = useState(40);

    const audioRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const controls = {
        togglePlayPause: () => {
            if (isPaused) {
                audioRef.current.play();

                dispatch(toggleIsPaused({ status: false }));
            } else {
                audioRef.current.pause();

                dispatch(toggleIsPaused({ status: true }));
            }
        },
        toggleLoop: () => {
            audioRef.current.loop = isLoop;

            dispatch(toggleIsLoop());
        },
        toggleShuffled: () => {
            dispatch(toggleIsShuffled());
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

        if (userJson) {
            setUser(JSON.parse(userJson));

            navigate("/", { replace: true });
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
            dispatch(toggleIsPaused({ status: false }));
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
                        controls={controls}
                    />
                </UserContext.Provider>
            </S.Wrapper>
        </>
    );
};
