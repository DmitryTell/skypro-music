import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GlobalStyles } from "./components/global/Global.styles";
import { AppRoutes } from "./pages/AppRoutes";
import { UserContext } from "./context/user";
import * as S from "./components/global/App.styles";
import { tokenAccessSelector } from "./store/selectors/token";
import { setToken } from "./store/slices/token";

export const App = () => {
    const tokenAccess = useSelector(tokenAccessSelector);

    const [user, setUser] = useState(null);
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);
    const [newError, setNewError] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clearUser = () => {
        window.localStorage.clear();

        setUser(null);
        navigate("/login");
        dispatch(setToken({ access: null, refresh: null }));
    };

    const contextUser = useMemo(() => ({
        username: user?.username,
        userId: user?.id,
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
        if (tokenAccess) {
            setTimeout(() => {
                dispatch(setToken({ access: null, refresh: null }));
            }, 200000);
        }
    }, [tokenAccess]);

    return (
        <>
            <GlobalStyles />
            <S.Wrapper>
                <UserContext.Provider value={contextUser}>
                    <AppRoutes
                        user={user}
                        setUser={setUser}
                        isOpenedMenu={isOpenedMenu}
                        setIsOpenedMenu={setIsOpenedMenu}
                        newError={newError}
                        setNewError={setNewError}
                    />
                </UserContext.Provider>
            </S.Wrapper>
        </>
    );
};
