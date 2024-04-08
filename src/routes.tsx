import { Routes, Route } from 'react-router-dom';

import { RequireAuth } from './hocs';
import { Layout } from './layouts';
import {
  SignIn,
  SignUp,
  Home,
  Favourite,
  Category,
  NotFound,
} from './pages';


export const AppRouter = () => (
  <Routes>
    <Route element={ <SignIn /> } path="/skypro-music/login" />
    <Route element={ <SignUp /> } path="/skypro-music/register" />
    <Route element={ <RequireAuth /> }>
      <Route element={ <Layout /> } path="/skypro-music">
        <Route index element={ <Home /> } />
        <Route element={ <Favourite /> } path="favourite" />
        <Route element={ <Category /> } path="category/:id" />
        <Route element={ <NotFound /> } path="*" />
      </Route>
    </Route>
  </Routes>
);
