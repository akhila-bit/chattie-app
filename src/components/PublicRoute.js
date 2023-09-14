import { Redirect, Route } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

export const PublicRoute = ({ children, ...routp }) => {
  const p = false;
  if (p) {
    return <Redirect to="/" />;
  }
  return <Route {...routp}>{children}</Route>;
};

// export default PublicRoute;
