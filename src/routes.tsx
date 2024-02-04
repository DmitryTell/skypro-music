import { Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from './pages';


export const AppRouter = () => (
  <Routes>
    <Route element={ <SignIn /> } path="/login" />
    <Route element={ <SignUp /> } path="/register" />
  </Routes>
);
