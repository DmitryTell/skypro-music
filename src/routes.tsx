import { Routes, Route } from 'react-router-dom';

import { SignIn } from './pages';


export const AppRouter = () => (
  <Routes>
    <Route element={ <SignIn /> } path="/login" />
  </Routes>
);
