import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "./Login";
import { Register } from "./Register";
import { Page404 } from "./Page404";
import { Main } from "./Main";
import { Favourites } from "./Favourites";
import { Category } from "./Category";
import * as P from "../data/pages";
import * as T from "../data/titles";

export const AppRoutes = ({
    user,
    setUser,
    isOpenedMenu,
    setIsOpenedMenu,
    player,
    setPlayer,
    newError,
    setNewError,
    currentTime,
    setCurrentTime,
    duration,
    volume,
    setVolume,
    controls,
}) => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <Login
                        newError={newError}
                        setNewError={setNewError}
                        setUser={setUser}
                    />
                }
            />
            <Route
                path="/register"
                element={
                    <Register
                        newError={newError}
                        setNewError={setNewError}
                        setUser={setUser}
                    />
                }
            />
            <Route
                path="*"
                element={
                    <Page404
                        page={P.NOT_FOUND}
                        isOpenedMenu={isOpenedMenu}
                        setIsOpenedMenu={setIsOpenedMenu}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                        duration={duration}
                        volume={volume}
                        setVolume={setVolume}
                        controls={controls}
                    />
                }
            />
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route
                    path="/"
                    element={
                        <Main
                            page={P.MAIN}
                            title={T.MAIN_TITLE}
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
                    }
                />
                <Route
                    path="/favourites"
                    element={
                        <Favourites
                            page={P.FAVOURITES}
                            title={T.FAVOURITES_TITLE}
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
                    }
                />
            </Route>
            <Route
                path="/category/:id"
                element={
                    <Category
                        page={P.CATEGORY}
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
                }
            />
        </Routes>
    );
};
