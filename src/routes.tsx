import { Routes, Route } from 'react-router-dom';

import { RequireAuth } from './hocs';
import { Layout } from './layouts';
import {
  SignIn,
  SignUp,
  Home,
  Favourites,
} from './pages';


export const AppRouter = () => (
  <Routes>
    <Route element={ <SignIn /> } path="/login" />
    <Route element={ <SignUp /> } path="/register" />
    <Route element={ <RequireAuth /> } path="/">
      <Route element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route element={ <Favourites /> } path="/favourite" />
      </Route>
    </Route>
  </Routes>
);
