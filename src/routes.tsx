import { Routes, Route } from 'react-router-dom';

import { RequireAuth } from './hocs';
import { Layout, LayoutAuth } from './layouts';
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
    <Route element={ <LayoutAuth /> } path="/skypro-music">
      <Route element={ <SignIn /> } path="login" />
      <Route element={ <SignUp /> } path="register" />
    </Route>
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
