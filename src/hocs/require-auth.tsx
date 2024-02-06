import { Navigate, Outlet } from 'react-router-dom';


// mock so far:
const isAuth = true;

export const RequireAuth = () => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
