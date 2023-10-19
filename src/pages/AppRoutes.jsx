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
    tracks,
    setTracks,
    isLoaded,
    setIsLoaded,
    isOpenedMenu,
    setIsOpenedMenu,
    player,
    setPlayer,
    newError,
    setNewError,
    isLoop,
    isPlaying,
    controls,
}) => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <Login newError={newError} setNewError={setNewError} />
                }
            />
            <Route
                path="/register"
                element={
                    <Register newError={newError} setNewError={setNewError} />
                }
            />
            <Route
                path="*"
                element={
                    <Page404
                        page={P.NOT_FOUND}
                        isOpenedMenu={isOpenedMenu}
                        setIsOpenedMenu={setIsOpenedMenu}
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
                    }
                />
                <Route
                    path="/favourites"
                    element={
                        <Favourites
                            page={P.FAVOURITES}
                            title={T.FAVOURITES_TITLE}
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
                    }
                />
            </Route>
            <Route
                path="/category/:id"
                element={
                    <Category
                        page={P.CATEGORY}
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
                }
            />
        </Routes>
    );
};
