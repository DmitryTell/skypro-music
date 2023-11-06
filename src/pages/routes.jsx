import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./protected-route/index";
import { Login } from "./login/index";
import { Register } from "./register/index";
import { Page404 } from "./page-404/index";
import { Main } from "./main/index";
import { Favourites } from "./favourites";
import { Category } from "./category/index";
import * as P from "../data/pages";
import * as T from "../data/titles";

export const AppRoutes = ({ user, setUser }) => {
    return (
        <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="*" element={<Page404 page={P.NOT_FOUND} />} />
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route
                    path="/"
                    element={<Main page={P.MAIN} title={T.MAIN_TITLE} />}
                />
                <Route
                    path="/favourites"
                    element={
                        <Favourites
                            page={P.FAVOURITES}
                            title={T.FAVOURITES_TITLE}
                        />
                    }
                />
            </Route>
            <Route
                path="/category/:id"
                element={<Category page={P.CATEGORY} />}
            />
        </Routes>
    );
};
